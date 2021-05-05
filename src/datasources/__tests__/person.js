const Person = require('../person');

/**
 * There are mock Persons at the top of this file.
 * 1 mock for the RAW API reponse, and another
 * for the shape of the person after it would have been
 * transformed by the person reducer.
 */
/**
 * MOCK DATA BELOW
 */

// properly transformed person
const mockPerson = {
  name: 'Luke Skywalker',
  height: '172',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
};

// raw person response from API
const mockPersonResponse = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
  films: [
    'http://swapi.dev/api/films/1/',
    'http://swapi.dev/api/films/2/',
    'http://swapi.dev/api/films/3/',
    'http://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [
    'http://swapi.dev/api/vehicles/14/',
    'http://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'http://swapi.dev/api/starships/12/',
    'http://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'http://swapi.dev/api/people/1/',
};
const mocks = {
  get: jest.fn(),
};

const ds = new Person();
ds.get = mocks.get;

describe('[Person.personReducer]', () => {
  it('properly transforms person', () => {
    expect(ds.personReducer(mockPersonResponse)).toEqual(mockPerson);
  });
});

describe('[Person.getAll]', () => {
  it('looks up people from api', async () => {
    // if api response is list of raw people,
    // res should be list of transformed people
    mocks.get.mockReturnValueOnce({ results: [mockPersonResponse] });
    const res = await ds.getAll({ page: 1 });

    expect(res).toEqual([mockPerson]);
    expect(mocks.get).toBeCalledWith('people/?page=1');
  });
});

describe('[Person.getByName]', () => {
  it('should look up single person from api by name', async () => {
    mocks.get.mockReturnValueOnce({ results: [mockPersonResponse] });
    const res = await ds.getByName({ name: 'Luke Skywalker' });

    expect(res).toEqual(mockPerson);
    expect(mocks.get).toBeCalledWith('people/?search=Luke%20Skywalker');
  });
});

describe('[Person.getById]', () => {
  it('should look up single person from api by id', async () => {
    mocks.get.mockReturnValueOnce(mockPersonResponse);
    const res = await ds.getById({ id: 1 });

    expect(res).toEqual(mockPerson);
    expect(mocks.get).toBeCalledWith('people/1');
  });
});

module.exports = { mockPersonResponse, mockPerson };
