import { Subject } from 'rxjs';

export class UserAlertServices {
    successMsgAdded: Subject<string> = new Subject();
    errorMsgAdded: Subject<string> = new Subject();

    addSuccessMsg(message: string) {
        this.successMsgAdded.next(message);
    }

    addErrorMsg(message: string) {
        this.errorMsgAdded.next(message);
    }

}
