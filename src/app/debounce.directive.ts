import { fromEvent as observableFromEvent, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs";
import {
  EventEmitter,
  ElementRef,
  OnInit,
  Directive,
  Input,
  Output
} from "@angular/core";
import { NgModel } from "@angular/forms";

@Directive({ selector: "[appDebounce]", providers: [NgModel] })
export class DebounceDirective implements OnInit {
  @Input() delay = 500; // milliseconds
  @Output() debounce: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private model: NgModel) {}

  ngOnInit(): void {
    const eventStream = observableFromEvent(
      this.elementRef.nativeElement,
      "keyup"
    ).pipe(debounceTime(this.delay), distinctUntilChanged());
    eventStream.subscribe(input => this.debounce.emit(input));
  }
}
