import piza from '/piza.jpg';

export default function PizzaImg() {
  return (
    <div className="col-8">
      <p className="text-center">Your Pizza:</p>
      <div className="container-fluid">
        <img src={piza} alt="" className="w-25" />
      </div>
    </div>
  );
}
