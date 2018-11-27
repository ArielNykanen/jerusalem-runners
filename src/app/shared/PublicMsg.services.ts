import { PublicMsg } from '../main-page/models/publicMsg.model';
import { Subject } from 'rxjs';

export class PublicMsgServices {

    publicRandomFailMsg: PublicMsg[] = [];
    publicRandomSuccessMsg: PublicMsg[] = [];
    successMessagesUpdated = new Subject<PublicMsg[]>();
    failMessagesUpdated = new Subject<PublicMsg[]>();

    getAllFailMessages() {
        return this.publicRandomFailMsg;
    }

    getAllSuccessMessages() {
        return this.publicRandomSuccessMsg;
    }

    addFailMessage(message: PublicMsg) {
        this.publicRandomFailMsg.push(message);
        this.failMessagesUpdated.next(this.publicRandomFailMsg);
    }

    addSuccessMessage(message: PublicMsg) {
        this.publicRandomSuccessMsg.push(message);
        this.successMessagesUpdated.next(this.publicRandomSuccessMsg);
    }

    setFailMessages(publicMsg: PublicMsg[]) {
      this.publicRandomFailMsg = publicMsg;
      this.failMessagesUpdated.next(this.publicRandomFailMsg);
    }

    setSuccessMessages(publicMsg: PublicMsg[]) {
        this.publicRandomSuccessMsg = publicMsg;
        this.successMessagesUpdated.next(this.publicRandomSuccessMsg);
    }
}
