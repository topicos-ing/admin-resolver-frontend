import { ParamH1 } from './styles';

const ExampleComponent = ({ font1, font2 }) => (
  <>
    <ParamH1 newFontSize={font1}>Texto1</ParamH1>
    <ParamH1 newFontSize={font2}>Texto2</ParamH1>
    <div>Div normal sin style</div>
    <div
      style={{
        background: 'yellow',
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
      }}
    >
      Div con style in line
    </div>
  </>
);

export default ExampleComponent;
