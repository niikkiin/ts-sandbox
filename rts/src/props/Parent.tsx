import { Child, ChildTwo } from "./Child";

const Parent = () => {
  return (
    <>
      <Child color="yellow" onClick={() => console.log("clicked")} />
      <ChildTwo color="orange" onClick={() => console.log("clicked")} >
        child
      </ChildTwo>
    </>
  );
};

export default Parent;
