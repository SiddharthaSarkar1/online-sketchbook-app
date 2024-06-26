import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { COLORS, MENU_ITEMS } from "@/constants";
import styles from "./index.module.css";
import { changeBrushSize, changeColor } from "@/slice/toolboxSlice";
import { socket } from "@/socket";
import { motion } from "framer-motion";


const ToolBox = ({reference}) => {

  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
    socket.emit("changeConfig", { color, size: e.target.value });
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
    socket.emit("changeConfig", { color: newColor, size });
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
    >
      <div className={styles.toolboxContainer}>
        {showStrokeToolOption && (
          <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
              <div
                className={cx(styles.colorBox, {
                  [styles.active]: color === COLORS.BLACK,
                })}
                style={{ backgroundColor: COLORS.BLACK }}
                onClick={() => updateColor(COLORS.BLACK)}
              />
              <div
                className={cx(styles.colorBox, {
                  [styles.active]: color === COLORS.RED,
                })}
                style={{ backgroundColor: COLORS.RED }}
                onClick={() => updateColor(COLORS.RED)}
              />
              <div
                className={cx(styles.colorBox, {
                  [styles.active]: color === COLORS.GREEN,
                })}
                style={{ backgroundColor: COLORS.GREEN }}
                onClick={() => updateColor(COLORS.GREEN)}
              />
              <div
                className={cx(styles.colorBox, {
                  [styles.active]: color === COLORS.BLUE,
                })}
                style={{ backgroundColor: COLORS.BLUE }}
                onClick={() => updateColor(COLORS.BLUE)}
              />
              <div
                className={cx(styles.colorBox, {
                  [styles.active]: color === COLORS.ORANGE,
                })}
                style={{ backgroundColor: COLORS.ORANGE }}
                onClick={() => updateColor(COLORS.ORANGE)}
              />
              <div
                className={cx(styles.colorBox, {
                  [styles.active]: color === COLORS.YELLOW,
                })}
                style={{ backgroundColor: COLORS.YELLOW }}
                onClick={() => updateColor(COLORS.YELLOW)}
              />
            </div>
          </div>
        )}

        {showBrushToolOption && (
          <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Brush Size</h4>
            <div className={styles.itemContainer}>
              <input
                className="w-72"
                type="range"
                min={1}
                max={10}
                step={1}
                onChange={updateBrushSize}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ToolBox;
