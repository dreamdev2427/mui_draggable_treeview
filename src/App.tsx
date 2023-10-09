import  React from "react";
import { MuiDraggableTreeView, TreeNode } from "mui-draggable-treeview";
import "./styles.css";

export default function App() {
  const data: TreeNode = {
    id: 1,
    name: "Cars",
    children: [
      {
        id: 2,
        name: "Sport Cars",
        children: [
          {
            id: 24,
            name: "Porsche"
          },
          {
            id: 25,
            name: "Ferrari"
          },
          {
            id: 26,
            name: "McLaren"
          }
        ]
      },
      {
        id: 3,
        name: "Classic Cars",
        children: [
          {
            id: 34,
            name: "1957 Corvette"
          },
          {
            id: 35,
            name: "Volkswagen Beetle"
          },
          {
            id: 36,
            name: "Bentley"
          }
        ]
      }
    ]
  };

  return (
    <div className="App">
      <h1 className="Title">MUI Draggable TreeView</h1>
      <MuiDraggableTreeView tree={data} enableDragAndDrop={true} />
    </div>
  );
}
