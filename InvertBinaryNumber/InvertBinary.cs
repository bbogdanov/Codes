using System;

namespace InvertBinaryNumber
{
  class InvertBinaryNumber
  {
    static void Main()
    {
      Console.Write("Add a number: ");

      int number = int.Parse(Console.ReadLine());
      string binaryNumber = Convert.ToString(Convert.ToInt32(number), 2);
      char[] binaryNumbers = binaryNumber.ToCharArray();

      Console.WriteLine("Binary number of {0} is {1}", number, binaryNumber);

      for (var i = 0; i < binaryNumbers.Length; i++) {
        if(binaryNumbers[i] == '0') binaryNumbers[i] = '1';
        else binaryNumbers[i] = '0';
      }

      string reverseNumber = new String(binaryNumbers);

      Console.WriteLine("Inverted Binary number of {0} is {1}, and it is equals to {2}", number, reverseNumber, Convert.ToInt32(reverseNumber, 2));

      Console.ReadLine();
    }
  }
}
