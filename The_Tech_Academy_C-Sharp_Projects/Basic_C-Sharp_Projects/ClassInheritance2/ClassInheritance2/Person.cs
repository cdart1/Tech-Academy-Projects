﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassInheritance2
{
    // Create an abstract class called Person with two properties
    public abstract class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // Declare the SayName() method
        public virtual void SayName()
        {
            string fullname = FirstName + LastName;
            Console.WriteLine("Name: " + fullname);
            Console.ReadLine();
        }
    }
}
