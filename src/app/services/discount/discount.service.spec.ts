import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DiscountService } from './discount.service';

describe('DiscountService', () => {
  let service: DiscountService;
  let someService: DiscountService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DiscountService]
    });
    service = TestBed.inject(DiscountService);
    httpTestingController = TestBed.get( HttpTestingController );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test HttpClient.getOne', () => {
    const  data = {
      id: 1,
      date: 'string',
      name: 'string',
      title: 'string',
      description: 'string',
      image: 'string',
    }

    try {
      const id = 1
      someService.getOne(id).subscribe( (response:any) => expect(response).toBe(data) )
  
      const req = httpTestingController.expectOne('http://localhost:3000/actions/1')
  
      expect(req.request.method).toBe('GET')
  
      req.flush(data)
    } catch (e) {
      console.log(e);
    }

  });

  it('test HttpClient.getAll', () => {
    const  data = {
      id: 1,
      date: 'string',
      name: 'string',
      title: 'string',
      description: 'string',
      image: 'string',
    }

    try {
      someService.getAll().subscribe((response: any) => expect(response).toBe(data))
      const req = httpTestingController.expectOne('http://localhost3000/actions');
      
      expect(req.request.method).toBe('GET');

      req.flush(data)

    } catch (e) {
      console.log(e);
      
    }
  })

  afterEach(() => httpTestingController.verify())

});
