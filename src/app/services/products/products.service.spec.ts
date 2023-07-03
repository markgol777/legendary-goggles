import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let someService: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {  
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductsService ]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.get( HttpTestingController );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test httpClient.getAll', () => {
    const data = {
      date: 'string',
      name: 'string',
      path: 'string',
      weight: 'number',
      price: 'number',
      ingredients: 'string',
      image: 'string',
      orderedProduct: 0,
      id: 1
    }

    try {
      someService.getAll().subscribe( (response:any) => expect(response).toBe(data) )
  
      const req = httpTestingController.expectOne('http://localhost:3000/products/actions/')
  
      expect(req.request.method).toBe('GET')
  
      req.flush(data)
    } catch (e) {
      console.log(e);
    }
  })

  it('test httpClient.getOne', () => {
    const data = {
      date: 'string',
      name: 'string',
      path: 'string',
      weight: 'number',
      price: 'number',
      ingredients: 'string',
      image: 'string',
      orderedProduct: 0,
      id: 1
    }

    try {
      const id = 1
      someService.getOne(id).subscribe( (response:any) => expect(response).toBe(data) )
  
      const req = httpTestingController.expectOne('http://localhost:3000/products/1/')
  
      expect(req.request.method).toBe('GET')
  
      req.flush(data)
    } catch (e) {
      console.log(e);
    }
  })

});
