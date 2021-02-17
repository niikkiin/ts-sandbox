interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi there from child: {color}
      <div>
        <button onClick={onClick}>Click me</button>
      </div>
    </div>
  );
};

//  will be a React function component, 'child' might have roperties assigned to it like 'propTypes' and 'contextTypes', 'child' will receive props of type 'childProps'
export const ChildTwo: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <div>
        <button onClick={onClick}>Click me</button>
        {children}
      </div>
    </div>
  );
};
