import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import Link from 'next/link';

const Tabs = ({ tabs, selectedView }) => {

    return (
        <div className="w-full flex justify-between rounded-[12px] gap-1 p-1 bg-white shadow-lg">
            {tabs.map((tab, index) => (
                <Link
                    href={{ pathname: tab?.link, query: { tab: tab?.tabName } }}
                    key={index}
                    className={`flex-1 flex justify-center py-4 rounded-[12px] cursor-pointer ${selectedView === tab.tabName ? 'bg-dark-blue-gradient text-white' : 'bg-white text-black'}`}
                >
                    <StyledLgText font="font-semibold">{tab.label}</StyledLgText>
                </Link>
            ))}
        </div>
    );
};

export default Tabs;
