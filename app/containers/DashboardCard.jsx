import cardsStyles from "../../styles/cards.module.css";
import textStyles from "../../styles/texts.module.css";

import { EditButton } from "../components/EditButton";
import { DeleteButton } from "../components/DeleteButton";
import { LabelCategory } from "../components/LabelCategory";

export function DashboardCard() {
  return (
    <div className={cardsStyles.dashboardcard}>
      <div>
        <div className={textStyles.cardsmall}>Suscripción</div>
        <div>
          <DeleteButton />
        </div>
      </div>

      <div className={textStyles.cardlarge}>
        <div>Spotify</div>
        <div>$ 149.50</div>
      </div>

      <div className={textStyles.cardsmall}>
        <div>Pago Mensual</div>
        <div>proximo pago 23/12/22</div>
      </div>

      <div className={textStyles.cardextrasmall}>
        <LabelCategory text="Cat 1" />
        <LabelCategory text="Cat 2" />
        <LabelCategory text="Cat 3" />
      </div>

      <div>
        <EditButton />
      </div>
    </div>
  );
}
