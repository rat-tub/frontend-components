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
    value: 8,
    unit: "rem",
  },
  height: {
    value: 8,
    unit: "rem",
  },
  padding: {
    value: 2,
    unit: "rem",
  },
  border: {
    value: 0.25,
    unit: "rem",
  },
  margin: {
    value: 0,
    unit: "rem",
  },
};

export const initialFlexBox = {
  display: "flex",
  "flex-direction": "row",
  width: {
    value: 8,
    unit: "rem",
  },
  height: {
    value: 8,
    unit: "rem",
  },
  padding: {
    value: 2,
    unit: "rem",
  },
  border: {
    value: 0.25,
    unit: "rem",
  },
  margin: {
    value: 0,
    unit: "rem",
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
  unit: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
    vw: {
      range: [0, 100],
      step: 2,
    },
    vh: {
      range: [0, 100],
      step: 2,
    },
    "%": {
      range: [0, 100],
      step: 2,
    },
    px: {
      range: [0, 1200],
      step: 4,
    },
    em: {
      range: [0, 80],
      step: 1,
    },
    rem: {
      range: [0, 80],
      step: 1,
    },
  },
  width: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
    scale: [1, 1],
  },
  height: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
    scale: [1, 1],
  },
  padding: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
    scale: [0.2, 0.5],
  },
  border: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
    scale: [0.1, 0.25],
  },
  margin: {
    options: ["vw", "vh", "%", "px", "em", "rem"],
    scale: [0.2, 0.5],
  },
};

/* ---------------------------------------------------------------------- */
/* ----------------------------- THE END! ------------------------------- */
/* ---------------------------------------------------------------------- */
