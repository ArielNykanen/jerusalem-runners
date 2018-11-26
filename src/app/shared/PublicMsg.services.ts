import { PublicMsg } from '../main-page/models/publicMsg.model';
import { Subject } from 'rxjs';

export class PublicMsgServices {

    publicRandomFailMsg: PublicMsg[] = [new PublicMsg('hahaha fail')];
    publicRandomSuccessMsg: PublicMsg[] = [new PublicMsg('hahaha success')];
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
        this.publicRandomFailMsg.push(message);
        this.successMessagesUpdated.next(this.publicRandomSuccessMsg);
    }

    setFailMessages(publicMsg: PublicMsg[]) {
        console.log(publicMsg[1]);
        this.publicRandomFailMsg = publicMsg;
        this.failMessagesUpdated.next(this.publicRandomFailMsg);
    }

    setSuccessMessages(publicMsg: PublicMsg[]) {
        this.publicRandomSuccessMsg = publicMsg;
        this.successMessagesUpdated.next(this.publicRandomSuccessMsg);
    }

    
}
