import "../assets/DropDown.css";
import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const DropDown = ({ setSelectedLevel , items = [] , dropLabel}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonText, setButtonText] = useState(`${dropLabel}`);

    // const {levels} = useStateContext()

    const handleItemClick = (item) => {
        setButtonText(item.name);
        setIsOpen(false);
        setSelectedLevel(item.name); // Call the passed function with the selected level ID or name
        
    };

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
            >
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {buttonText}
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                </motion.button>
                <motion.ul
                className="ul-stylesh"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    {items.map((item) => {
                        return <>
                            <motion.button onClick={() => handleItemClick(item)} variants={itemVariants}>{item.name} </motion.button>
                        </>
                    })}
                    
                </motion.ul>
            </motion.nav>
        </>
    );
};

DropDown.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    setSelectedLevel: PropTypes.func.isRequired
};

export default DropDown;
{/* <motion.button onClick={() => handleItemClick("Item 1")} variants={itemVariants}>Item 1</motion.button>
                    <motion.button onClick={() => handleItemClick("Item 2")} variants={itemVariants}>Item 2</motion.button>
                    <motion.button onClick={() => handleItemClick("Item 3")} variants={itemVariants}>Item 3</motion.button>
                    <motion.button onClick={() => handleItemClick("Item 4")} variants={itemVariants}>Item 4</motion.button>
                    <motion.button onClick={() => handleItemClick("Item 5")} variants={itemVariants}>Item 5</motion.button> */}