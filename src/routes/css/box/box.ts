export interface BoxInterface {
  display: string;
  width: {
    value: number;
    unit: string;
  };
  height: {
    value: number;
    unit: string;
  };
  padding: {
    value: number;
    unit: string;
  };
  border: {
    value: number;
    unit: string;
  };
  margin: {
    value: number;
    unit: string;
  };
}

export interface FlexBoxInterface extends BoxInterface {
  "flex-direction"?: string;
  "flex-wrap"?: string;
  "justify-content"?: string;
  "align-items"?: string;
  "align-content"?: string;
}

export interface FlexBoxStackInterface {
  boxInfo: FlexBoxInterface;
  children: FlexBoxStackInterface[];
}

/* ---------------------------------------------------------------------- */
/* ----------------------------- EXAMPLES ------------------------------- */
/* ---------------------------------------------------------------------- */

export const smallBox: BoxInterface = {
  display: "block",
  width: {
    value: 80,
    unit: "px",
  },
  height: {
    value: 80,
    unit: "px",
  },
  padding: {
    value: 10,
    unit: "px",
  },
  border: {
    value: 2,
    unit: "px",
  },
  margin: {
    value: 0,
    unit: "px",
  },
};

export const initialFlexBox = {
  display: "flex",
  "flex-direction": "row",
  "flex-wrap": "wrap",
  width: {
    value: 80,
    unit: "px",
  },
  height: {
    value: 80,
    unit: "px",
  },
  padding: {
    value: 10,
    unit: "px",
  },
  border: {
    value: 2,
    unit: "px",
  },
  margin: {
    value: 0,
    unit: "px",
  },
};

export const smallStack: FlexBoxStackInterface = {
  boxInfo: structuredClone(initialFlexBox),
  children: [],
};

/* ---------------------------------------------------------------------- */
/* ----------------------------- OPTIONS! ------------------------------- */
/* ---------------------------------------------------------------------- */

export const Options: any = {
  display: {
    options: ["block", "inline", "inline-block", "flex", "none"],
  },
  "flex-direction": {
    options: ["row", "row-reverse", "column", "column-reverse"],
  },
  "flex-wrap": {
    options: ["wrap", "nowrap", "wrap-reverse"],
  },
  "justify-content": {
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  "align-items": {
    options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
  },
  "align-content": {
    options: [
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  width: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
  },
  height: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
  },
  padding: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
  },
  border: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
  },
  margin: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
  },
};

/* ---------------------------------------------------------------------- */
/* ----------------------------- THE END! ------------------------------- */
/* ---------------------------------------------------------------------- */
