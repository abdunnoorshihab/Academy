import {Component, EventEmitter, inject, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UtilsService} from '../../../services/core/utils.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrl: './information-form.component.scss'
})
export class InformationFormComponent implements OnInit, OnDestroy {

  // Store variables
  @ViewChild('formElement') formElement: NgForm;
  @Output() onSubmitForm = new EventEmitter();

  dataForm: FormGroup;
  categories: any[] = [
    {
      _id: '1',
      name: 'E-commerce'
    },
    {
      _id: '2',
      name: 'Blog'
    }
  ];

  subCategories: any[] = [
    {
      _id: '1',
      category: '1',
      name: 'Electronics'
    },
    {
      _id: '2',
      category: '1',
      name: 'Beauty'
    },
    {
      _id: '3',
      category: '1',
      name: 'Toy'
    },
    {
      _id: '4',
      category: '2',
      name: 'Portfolio'
    },
  ]

  // Form Controls
  websiteNameCtrl: FormControl = new FormControl(null, Validators.required);
  domainCtrl: FormControl = new FormControl(null, Validators.required);
  websiteCategoryCtrl: FormControl = new FormControl(null, Validators.required);
  websiteSubCategoryCtrl: FormControl = new FormControl(null, Validators.required);

  // Inject
  private readonly fb = inject(FormBuilder);
  private readonly utilsService = inject(UtilsService);

  // Subscriptions
  private subAutoSlug: Subscription;


  ngOnInit() {
    this.initForm();
    this.autoGenerateSlug();
  }

  /**
   * Form Methods business
   * initForm()
   */
  initForm() {
    this.dataForm = this.fb.group({
      websiteName: this.websiteNameCtrl,
      domain: this.domainCtrl,
      category: this.websiteCategoryCtrl,
      subCategory: this.websiteSubCategoryCtrl
    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched();
      return;
    }
    this.onSubmitForm.emit(this.dataForm.value);
  }

  autoGenerateSlug() {
    this.subAutoSlug = this.dataForm.get('websiteName').valueChanges
      .pipe(
      ).subscribe(d => {
        const res = this.utilsService.stringToSlug(d);
        this.dataForm.patchValue({
          domain: res
        });
      });
  }

  ngOnDestroy() {
    if (this.subAutoSlug) {
      this.subAutoSlug.unsubscribe();
    }
  }
}
