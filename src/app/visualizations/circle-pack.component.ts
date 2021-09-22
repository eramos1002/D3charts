import * as d3 from "d3";
import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-circle-pack",
  templateUrl: "./circle-pack.component.html",
  styleUrls: ["./circle-pack.component.css"]
})
export class CirclePack implements OnInit {
  @Input() data: any;
  @ViewChild("svg", { static: true }) svgElement;

  private width: number;
  private height: number;

  ngOnInit() {
    this.width = 500;
    this.height = 500;

    const rootNode = d3.hierarchy(this.data);
    rootNode.sum((d: any) => d.value);

    const pack = d3
      .pack()
      .size([this.width, this.height])
      .padding(4);

    const nodes = pack(rootNode).descendants();

    const colorScale = d3
      .scaleSequential((t: any) => {
        return d3.interpolateYlOrRd(t);
      })
      .domain([0, nodes.length]);

    const svg = d3
      .select(this.svgElement.nativeElement)
      .attr("width", this.width)
      .attr("height", this.height);

    const circles = svg.selectAll(".node").data(nodes, d => d.data.name);

    circles.join(
      (enter: any) =>
        enter
          .append("circle")
          .attr("cx", (d: any) => d.x)
          .attr("cy", (d: any) => d.y)
          .attr("r", 0)
          .attr("class", "node")
          .attr("fill", (d: any, i: number) => colorScale(i))
          .call((enter: any) => enter.transition().attr("r", (d: any) => d.r)),
      (update: any) =>
        update.call((update: any) =>
          update
            .transition()
            .attr("cx", (d: any) => d.x)
            .attr("cy", (d: any) => d.y)
            .attr("r", (d: any) => d.r)
        ),
      (exit: any) =>
        exit.call((exit: any) =>
          exit
            .transition()
            .attr("r", 0)
            .remove()
        )
    );
  }
}
