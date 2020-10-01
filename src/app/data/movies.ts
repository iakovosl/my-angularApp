export const movies: Movie[] = [
    {
      name: 'Lord of The rings',
      price: 19,
      description: ''
    },
    {
      name: 'Harry Potter',
      price: 29,
      description: ''
    },
    {
      name: 'The GodFather',
      price: 29,
      description: ''
    },
    {
      name: 'Pulp Fiction',
      price: 29,
      description: ''
    },
    {
      name: 'Batman',
      price: 29,
      description: ''
    },
  ];
  export class Movie {
    public name: string;
    public price: number;
	public description: string;
  
    constructor(name: string,price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;

    }
  }
  
  