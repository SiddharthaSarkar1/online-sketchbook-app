import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import cx from "classnames";
import styles from "./index.module.css";
import { MENU_ITEMS } from "@/constants";
import { actionItemClick, menuItemClick } from "@/slice/menuSlice";
import ToolTip from "../Tooltip";

const Menu = ({reference}) => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
    >
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <ToolTip message="Pencil">
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </ToolTip>
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <ToolTip message="Eraser">
          <FontAwesomeIcon icon={faEraser} className={styles.icon} />
        </ToolTip>
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
      >
        <ToolTip message="Undo">
          <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
        </ToolTip>
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
      >
        <ToolTip message="Redo">
          <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
        </ToolTip>
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <ToolTip message="Download">
          <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
        </ToolTip>
      </div>
    </div>
    </motion.div>
  );
};

export default Menu;
