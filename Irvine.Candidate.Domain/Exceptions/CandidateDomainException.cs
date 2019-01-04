using Irvine.SeedWork.Domain;
using System;

namespace Irvine.Candidate.Domain.Domain.Exceptions
{
    public class CandidateDomainException : DomainException
    {
        public CandidateDomainException() { }

        public CandidateDomainException(string message)
            : base(message) { }

        public CandidateDomainException(string message, Exception innerException)
            : base(message, innerException) { }
    }
}