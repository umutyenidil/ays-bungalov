import {IconCircleCheck} from "@tabler/icons-react";
import PropTypes from "prop-types";

const HomeInformationListItem = ({content, className}) => {
    return (
        <li className={`${className} flex flex-row items-center gap-2`}>
            <IconCircleCheck width={24} height={24}/>
            {content}
        </li>
    );
};

HomeInformationListItem.propTypes = {
    content: PropTypes.string,
    className: PropTypes.string,
};

export default HomeInformationListItem;