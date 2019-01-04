using Irvine.SeedWork.Domain;
using System;
using System.Collections.Generic;
namespace Irvine.Candidate.Domain.AggregatesModel.CandidateAggregate{
    public  class Availability:ValueObject{
        public Availability(Location location, DateTime startDate){
            Location = location;
            StartDate = startDate;
        }
        public Location Location { get;private set; }
        public DateTime StartDate { get; private set; }
        protected override IEnumerable<object> GetAtomicValues(){
            yield return Location;
            yield return StartDate;
        }
    }
}