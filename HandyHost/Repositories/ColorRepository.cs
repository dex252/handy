namespace HandyHost.Repositories
{
    public class ColorRepository:BaseRepository
    {
        public bool Red(string value)
        {
            return Comparer("red", value);
        }

        public bool Green(string value)
        {
            return Comparer("green", value);
        }

        public bool Blue(string value)
        {
            return Comparer("blue", value);
        }
    }
}
