import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let someService: CategoryService
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CategoryService ]
    });
    service = TestBed.inject(CategoryService);
    httpTestingController = TestBed.get( HttpTestingController );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test HttpClient.getAll', () => {
    const data = {
      id: 1,
      date: 'string',
      name: 'string',
      title: 'string',
      description: 'string',
      image: 'string'
    }
    try {
      someService.getAll().subscribe((response:any) => expect(response).toBe('data'))

      const req = httpTestingController.expectOne('http://localhost:3000/categories')

      expect(req.request.method).toBe('GET')

      req.flush(data)
    } catch (e) {
      console.log(e);
    }

  })
  afterEach( () => httpTestingController.verify() )
});
