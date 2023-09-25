import { useStore } from '../store';

export default function FormReset() {
  const [state, dispatch] = useStore();
  const priceTotal = state.total;

  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-between flex-sm-column flex-md-row">
        <p className="">Your piza</p>
        <span>{priceTotal}</span>
        <button
          className="btn btn-warning"
          onClick={() => {
            dispatch({ type: 'reset_piza' });
          }}
        >
          Reset pizza
        </button>
      </div>
    </div>
  );
}
