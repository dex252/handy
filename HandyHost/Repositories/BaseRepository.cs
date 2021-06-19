using System;

namespace HandyHost.Repositories
{
    public class BaseRepository
    {
        protected bool Comparer(string value1, string value2)
        {
            return value1.Equals(value2, StringComparison.CurrentCultureIgnoreCase);
        }
    }
}
