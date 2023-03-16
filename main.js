document.write("3. Using many array in one array changed in map maethod double qutation & one word add.");
  document.write("<br>");
  document.write("<br>");

  const users2 = [
    {
      first_name: 'Mike',
      location: 'London'
    },
    {
      first_name: 'Tim',
      location: 'US'
    },
    {
      first_name: 'John',
      location: 'Australia'
    }
  ];

  const fullNames2 = users2.map(word => `"${word.first_name} ${"Lives"} ${word.location}"`);
  document.write(fullNames2);