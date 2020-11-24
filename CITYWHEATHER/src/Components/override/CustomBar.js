// import { withOverrides, useOverrides } from "react-overrides"
// or...
import withOverrides from "overrides/with"
import useOverrides from "overrides/use"
import { Button } from "react-bootstrap";

const defaultComponents = {
  Bar: ({ style, message }) =>
    <div style={style}>{message}</div>
};



// Hook:
export const Foo = ({ overrides, ...props }) => {
    const { Bar } = useOverrides(defaultComponents, overrides);
    return <Bar message="hello" />;
  };
  
// }
// export default CustomBar;

  
  // Higher-Order Component:
//   const Foo = withOverrides(defaultComponents)(
//     ({ Bar }) =>
//       <Bar message="hello" />
//   );
  
  // Higher-Order Component on class component with decorator:
//   @withOverrides(defaultComponents)
//   class Foo extends React.Component {
//     render() {
//       const { Bar } = this.props;
//       return <Bar message="hello" />;
//     }
//   }
