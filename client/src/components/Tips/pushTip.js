import { pushNotifications } from "../../helpers";
import { ReactComponent as DoubleClick } from "../../assets/img/icons/double-click.svg";
import { ReactComponent as Searching } from "../../assets/img/icons/searching.svg";
import { ReactComponent as EditDelete } from "../../assets/img/icons/eraser.svg";

export function pushTips(tips) {
  if (!tips?.length) return;
  const tip = tips.shift();
  const clearTips = () => {
    tips = [];
  };

  pushNotifications({
    content: <Tip tip={tip} skipTut={clearTips} />,
    duration: 0,
    position: "top-right",
    onRemoval: () => {
      pushTips(tips);
    },
  });
}

const renderIcon = (type) => {
  switch (type) {
    case "DOUBLE_CLICK":
      return (
        <DoubleClick width="3rem" fill="whitesmoke" className="inline-block" />
      );
    case "SEARCHING":
      return (
        <Searching width="3rem" fill="whitesmoke" className="inline-block" />
      );
    case "EDIT_DELETE":
      return (
        <EditDelete width="3rem" fill="whitesmoke" className="inline-block" />
      );

    default:
      throw new Error("Unhandled type in pushNotifications");
  }
};

const Tip = ({ tip, skipTut }) => {
  return (
    <div
      style={{ background: "#333" }}
      className="text-white neo_shadow w-full p-3 rounded-md"
    >
      <h6>Tips</h6>
      <hr className="my-2" />
      <div>
        <div className="text-right">
          <Tip.Content tip={tip} />
          <button
            onClick={skipTut}
            className="text-right text-yellow-300 text-sm bg-transparent hover:underline active:text-yellow-400"
          >
            skip tips
          </button>
        </div>
      </div>
    </div>
  );
};

Tip.Content = ({ tip }) => {
  return (
    <div class="flex">
      {renderIcon(tip.type)}
      <div className="inline-block flex-1 text-left pl-4">{tip.message}</div>
    </div>
  );
};

export default pushTips;
