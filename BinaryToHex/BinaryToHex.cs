using System;

namespace BinaryToHex
{
  class BinaryToHex
  {
    public static void Main()
    {
      string binaryNumber  = Console.ReadLine();
      string hexNumber     = Convert.ToInt32(binaryNumber, 2).ToString("X");
      int    decimalNumber = Convert.ToInt32(binaryNumber, 2);

      Console.WriteLine("Your Decimal number is: {0}", decimalNumber);
      Console.WriteLine("Your Hex     number is: {0}", hexNumber    );

      Console.ReadLine();
    }
  }
}
