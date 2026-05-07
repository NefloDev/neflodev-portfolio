import ExperienceItem from "./ExperienceItem";

import * as constants from "../constants";
import { Component } from "react";

export default class ExperienceBlock extends Component {
  render() {
    return (
      <div className="experience-block">
        {constants.experienceItems.map((item: any) =>
          ExperienceItem(
            item.title,
            item.startYear,
            item.endYear,
            item.description,
            item.url,
          ),
        )}
      </div>
    );
  }
}
