import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelApiService } from 'src/app/shared/services/marvel-api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ComicsComponent implements OnInit {
  public formulario!: FormGroup;
  get email(): any {
    return this.formulario.get('email');
  }
  get cartao(): any {
    return this.formulario.get('cartao');
  }
  get codigo(): any {
    return this.formulario.get('codigo');
  }
  get cupom(): any {
    return this.formulario.get('cupom');
  }

  constructor(
    private marvelApiService: MarvelApiService,
    private route: ActivatedRoute,
    private router: Router,
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  comics!: any;
  id!: number;
  ngOnInit(): void {
    this.getMarvelApiId();
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      email: [null, Validators.required],
      cartao: [null, Validators.required],
      codigo: [null, Validators.required],
      cupom: [null],
    });
  }

  getMarvelApiId() {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.comics = this.marvelApiService
      .getAllCharactersId(this.id)
      .subscribe((data: any) => {
const random = Math.floor(Math.random() * (25 - 0)) + 0;


        data.filter((value: any, index: number) => (  index === random
        )).map((value: any) =>  value.variantDescription = 'rare');

        this.comics = data;
      });
  }
  open(content: any) {
    this.modalService.open(content);
  }

  comprar(value: number) {
    if (this.formulario.valid) {
      const msg = 'compra bem sucedida: ' + (value - 1);
      this.toastr.success(msg, 'SUCESSO');
      setTimeout(() => {
        this.fecharModal(), 3000;
      });
    } else {
      const msg = 'preencha todos os campos: ';
      this.toastr.error(msg, 'ERROR');
    }
  }

  fecharModal() {
    this.modalService.dismissAll();
  }
}
