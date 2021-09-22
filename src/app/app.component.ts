import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  public circlePackData = {
    children: [
      { name: "aaa", value: 100 },
      { name: "bbb", value: 200 },
      { name: "ccc", value: 100 },
      { name: "ddd", value: 300 }
    ],
    name: ""
  };
}
