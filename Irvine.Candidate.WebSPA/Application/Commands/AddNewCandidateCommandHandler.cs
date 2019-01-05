using System;
using System.Threading;
using System.Threading.Tasks;
using BuildingBlocks.Infrastructure.Services.Commands;
using BuildingBlocks.Infrastructure.Services.Idempotency;
using BuildingBlocks.Infrastructure.Services.Identity;
using MediatR;
using Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate;
using Irvine.Candidate.Domain.AggregatesModel.ProviderAggregate;
using Irvine.Candidate.Domain.Domain.Exceptions;
namespace Irvine.Candidate.WebSPA.Application.Commands
{
    public class AddNewCandidateCommandHandler : IRequestHandler<AddNewCandidateCommand, bool>{
        private readonly ICandidateRepository _candidateRepository;
        private readonly IIdentityService _identityService;
        private readonly IProviderRepository _providerRepository;
        public AddNewCandidateCommandHandler(ICandidateRepository candidateRepository, IIdentityService identityService,
            IProviderRepository providerRepository){
            _candidateRepository = candidateRepository;
            _identityService = identityService ?? throw new ArgumentNullException(nameof(identityService));
            _providerRepository = providerRepository;
        }
        public async Task<bool> Handle(AddNewCandidateCommand message, CancellationToken cancellationToken){
            var providerIdentityId = _identityService.GetUserIdentity();
            var provider = await _providerRepository.FindAsync(providerIdentityId);
            //todo: change the text of exception
            if (provider == null) { throw new CandidateDomainException("can't find the provider");}
            var candidate = new Domain.AggregatesModel.CandidateAggregate.Candidate(message.Name, message.LastName, provider.Id, message.ImageUrl,
                message.ResumeUrl, message.LookingForNext, message.StartTime.Value, message.LocationId);
                candidate.AddExperience(ExperienceType.ManufacturingEngineer, message.ManufacturingEngineer);
                candidate.AddExperience(ExperienceType.MedicalDevice, message.MedicalDevice);
                candidate.AddExperience(ExperienceType.QualityEngineer, message.QualityEngineer);
                candidate.AddExperience(ExperienceType.ValidationEngineer, message.ValidationEngineer);
            candidate.SetRate(message.MinimumRate,message.MaximumRate);
            foreach (var sk in message.SkillDtos){
                if (sk.Id == 0){
                    _candidateRepository.AddSkill(new Skill(sk.Name));
                     await _candidateRepository.UnitOfWork.SaveEntitiesAsync();
                }
                candidate.AddSkill(sk.Id);
            }
         
            _candidateRepository.Add(candidate);
            return await _candidateRepository.UnitOfWork.SaveEntitiesAsync();
        }
        public class AddNewCandidateIdentifiedCommandHandler : IdentifierCommandHandler<AddNewCandidateCommand, bool>{
            public AddNewCandidateIdentifiedCommandHandler(IMediator mediator, IRequestManager requestManager,
                Identifier identifier) : base(mediator, requestManager, identifier){ }
            protected override bool CreateResultForDuplicateRequest(){
                return true;
            }
        }
    }
}