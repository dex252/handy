using System;
using System.Collections.Generic;
using HandyHost.Repositories;
using Xunit;

namespace HandyTests
{
    public class ColorsTest
    {
        [Fact]
        public void RedTest()
        {
            var animalRepository = new ColorRepository();
            var result = animalRepository.Red("red");

            Assert.True(result);
        }

        [Fact]
        public void GreenTest()
        {
            var animalRepository = new ColorRepository();
            var result = animalRepository.Green("green");

            Assert.True(result);
        }

        [Fact]
        public void BlueTest()
        {
            var animalRepository = new ColorRepository();
            var result = animalRepository.Blue("BLUE");

            Assert.True(result);
        }

        [Fact]
        public void NotRedTest()
        {
            var animalRepository = new ColorRepository();
            var result = animalRepository.Red("green");

            Assert.False(result);
        }

        [Fact]
        public void NotGreenTest()
        {
            var animalRepository = new ColorRepository();
            var result = animalRepository.Green("quan");

            Assert.False(result);
        }

    }
}
