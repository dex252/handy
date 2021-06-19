namespace HandyHost.Repositories
{
    public class AnimalRepository: BaseRepository
    {
        public bool Cat(string value)
        {
            return Comparer("cat", value);
        }

        public bool Dog(string value)
        {
            return Comparer("dog", value);
        }
    }
}
