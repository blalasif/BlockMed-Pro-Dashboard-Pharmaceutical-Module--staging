import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import InputField from '../inputField/InputField';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Button from '../button/Button';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import ChooseCard from '../chooseCard/ChooseCard';
import { content } from '@/data/data';

const CardForm = ({ addNewCard = false, cardAlreadyAdded = false }) => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const [cards, setCards] = useState(content.cardData);

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    const setFieldValue = (field, value) => {
        setState((prev) => ({ ...prev, [field]: value }));
    }

    const handleDefaultChange = (index) => {
        const updatedCards = cards.map((card, i) => ({
            ...card,
            isDefault: i === index,
        }));
        setCards(updatedCards);
    };

    return (
        <div className={`w-full h-max bg-white shadow-lg rounded-[22px] flex flex-col ${!cardAlreadyAdded && "pt-10"}`}>
            {
                !cardAlreadyAdded &&
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
            }
            <form className="grid w-full grid-cols-2 gap-6 p-5 xl:p-10">
                {!cardAlreadyAdded ?
                    <><div className="w-full col-span-2">
                        <InputField inputMode="numeric" name="number" placeholder="Card Number" value={state.number} onChange={(e) => {
                            const value = e.target.value;
                            if (value.length > 16) {
                                return false;
                            }
                            setFieldValue("number", value);
                        }} onFocus={handleInputFocus} label="Card Number" required />
                    </div>
                        <div className="w-full col-span-2">
                            <InputField type="text" name="name" placeholder="Enter your first name" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} label="Card Holder" required />
                        </div>
                        <div className="flex w-full col-span-2 gap-3">
                            <div className="w-full col-span-1">
                                <InputField inputMode="numeric" name="expiry" placeholder="MM / YY" value={state.expiry} onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length > 2) {
                                        setFieldValue(
                                            "expiry",
                                            value.slice(0, 2) + "/" + value.slice(2, 4)
                                        );
                                        return false;
                                    }
                                    setFieldValue("expiry", value);
                                }} onFocus={handleInputFocus} label="Expiry Date" required />
                            </div>
                            <div className="w-full col-span-1">
                                <InputField inputMode="numeric" name="cvc" placeholder="***" value={state.cvc} onChange={(e) => {
                                    const value = e.target.value;
                                    if (value.length > 4) {
                                        return false;
                                    }
                                    setFieldValue("cvc", value);
                                }} onFocus={handleInputFocus} label="CVV/CVC" required />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex flex-col w-full col-span-2">
                            <div className="flex justify-between w-full">
                                <div>
                                    <StyledH4Heading font="text-light-blue-gradient">Choose card</StyledH4Heading>
                                </div>
                                <Link href="add-new-card" className="flex items-center gap-1">
                                    <Icon icon="ei:plus" width="32" height="32" />
                                    <StyledLgText font="text-black">Add New Card</StyledLgText>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <hr className="w-full text-light-gray" />
                        </div>
                        <div className="flex flex-col w-full col-span-2 gap-3">
                            {
                                cards?.map((item, index) => {
                                    return <ChooseCard key={index} data={item} onChange={() => handleDefaultChange(index)} />
                                })
                            }
                        </div>
                    </>
                }
                {!addNewCard && <><div className="col-span-2">
                    <hr className="w-full text-light-gray" />
                </div>
                    <div className="flex justify-between w-full col-span-2">
                        <div>
                            <StyledLgText font="text-dark-gray font-medium">Subtotal</StyledLgText>
                        </div>
                        <div>
                            <StyledLgText font="text-dark-gray font-medium">$ 499</StyledLgText>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <hr className="w-full text-light-gray" />
                    </div>
                    <div className="flex justify-between w-full col-span-2">
                        <div>
                            <StyledLgText font="text-black font-bold">Total</StyledLgText>
                        </div>
                        <div>
                            <StyledLgText font="text-black font-bold">$ 499</StyledLgText>
                        </div>
                    </div></>}
                {
                    addNewCard
                        ? <div className="w-full col-span-2">
                            <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Save Card</Button>
                        </div> :
                        <div className="w-full col-span-2">
                            <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Pay Now</Button>
                        </div>}
            </form>
        </div>
    );
}
export default CardForm
