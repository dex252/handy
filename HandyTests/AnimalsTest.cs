using System;
using System.Collections.Generic;
using HandyHost.Repositories;
using Xunit;

namespace HandyTests
{
    public class AnimalsTest
    {
        [Theory]
        [MemberData(nameof(AnimalData))]
        public void CatTest(Tuple<string, bool> testData)
        {
            var animalRepository = new AnimalRepository();
            var result = animalRepository.Cat(testData.Item1);

            Assert.Equal(result, testData.Item2);
        }

        [Theory]
        [MemberData(nameof(AnimalData))]
        public void DogTest(Tuple<string, bool> testData)
        {
            var animalRepository = new AnimalRepository();
            var result = animalRepository.Dog(testData.Item1);

            Assert.Equal(result, !testData.Item2);
        }

        public static IEnumerable<object[]> AnimalData =>
            new List<object[]>
            {
                new object[]
                {
                    new Tuple<string, bool>
                    (
                        "cat",
                        true
                    )
                },
                new object[]
                {
                    new Tuple<string, bool>
                    (
                        "dog",
                        false
                    )
                }
            };
    }
}
