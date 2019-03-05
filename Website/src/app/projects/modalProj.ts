import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.html'
})
export class NgbdModalBasic {
 project:{};

  constructor(private modalService: NgbModal) {}

  open(content) {
    console.log(this.project);
    console.log(content);
    this.project=content;
  }

}