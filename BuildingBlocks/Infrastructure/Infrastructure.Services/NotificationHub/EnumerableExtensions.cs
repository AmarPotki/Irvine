using System;
using System.Collections.Generic;
using System.Text;

namespace BuildingBlocks.Infrastructure.Services.NotificationHub
{
    public static class EnumerableExtensions
    {
        public static void ForEach<T>(this IEnumerable<T> source, Action<T> action)
        {
            foreach (var item in source)
            {
                action.Invoke(item);
            }
        }
    }
}
