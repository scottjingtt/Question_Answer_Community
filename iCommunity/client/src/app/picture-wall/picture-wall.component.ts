import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    // moduleId: module.id,
    selector:'picture-wall',
    templateUrl: 'picture-wall.component.html',
    styleUrls: ['./picture-wall.component.css']
})

export class PictureWallComponent{
    @Output()
    notify: EventEmitter<string> = new EventEmitter<string>();

    showLogin():void{
        this.notify.emit("login");
    }
}