import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function NewNegotiation({ formStatus, setFormStatus, activeAccount, setActiveAccount }) {
    const useLocalStorageList = (key, defaultValue) => {
        const stored = localStorage.getItem(key);
        const initial = stored ? JSON.parse(stored) : defaultValue;
        const [value, setValue] = useState(initial);

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
            checkInputStatus();
        }, [key, value]);

        return [value, setValue];
    };

    //local storage keys
    const [timerValue, setTimerValue] = useLocalStorageList('Timer time', 1800);

    const [vesselName, setVesselName] = useLocalStorageList('Vessel Name', []);
    const [firstCheckbox, setFirstCheckbox] = useLocalStorageList('Check Box Vessel Name', true);

    const [account, setAccount] = useLocalStorageList('Account', []);
    const [secondCheckbox, setSecondCheckbox] = useLocalStorageList('Check Box Account', true);

    const [loadRange, setLoadRange] = useLocalStorageList('Load Range', []);
    const [thirdCheckbox, setThirdCheckbox] = useLocalStorageList('Check Box Load Range', true);

    const [dischargeRange, setDischargeRange] = useLocalStorageList('Discharge Range', []);
    const [fourthCheckbox, setFourthCheckbox] = useLocalStorageList('Check Box Discharge Range', true);

    const [laycan, setLaycan] = useLocalStorageList('Laycan', []);
    const [fifthCheckbox, setFifthCheckbox] = useLocalStorageList('Check Box Laycan', true);

    const [quantity, setQuantity] = useLocalStorageList('Quantity', []);
    const [sixthCheckbox, setSixthCheckbox] = useLocalStorageList('Check Box Quantity', true);

    const [grade, setGrade] = useLocalStorageList('Grade', []);
    const [seventhCheckbox, setSeventhCheckbox] = useLocalStorageList('Check Box Grade', true);

    const [freight, setFreight] = useLocalStorageList('Freight', []);
    const [eighthCheckbox, setEighthCheckbox] = useLocalStorageList('Check Box Freight', true);

    const [freightUnits, setFreightUnits] = useLocalStorageList('Freight Units', []);

    const [overage, setOverage] = useLocalStorageList('Overage', []);
    const [ninethCheckbox, setNinethCheckbox] = useLocalStorageList('Check Box Overage', true);

    const [demurrage, setDemurrage] = useLocalStorageList('Demurrage', []);
    const [tenthCheckbox, setTenthCheckbox] = useLocalStorageList('Check Box Demurrage', true);

    const [demurrageUnits, setDemurrageUnits] = useLocalStorageList('Demurrage Units', []);

    const [laytime, setLaytime] = useLocalStorageList('Laytime', []);
    const [eleventhCheckbox, setEleventhCheckbox] = useLocalStorageList('Check Box Laytime', true);

    const [addCom, setAddCom] = useLocalStorageList('Add.Com', []);
    const [twelfthCheckbox, setTwelfthCheckbox] = useLocalStorageList('Check Box Add.Com', true);

    const [brokerCom, setBrokerCom] = useLocalStorageList('Broker.Com', []);
    const [thirteenthCheckbox, setThirteenthCheckbox] = useLocalStorageList('Check Box Broker.Com', true);

    const [ammLastDone, setAmmLastDone] = useLocalStorageList('Amm. Last Done', []);
    const [fourteenthCheckbox, setFourteenthCheckbox] = useLocalStorageList('Check Box Amm. Last Done', true);

    const [subsDue, setSubsDue] = useLocalStorageList('Subs Due', []);
    const [fifteenthCheckbox, setFifteenthCheckbox] = useLocalStorageList('Check Box Subs Due', true);

    const [l3c, setl3c] = useLocalStorageList('L3C', []);
    const [sixteenthCheckbox, setSixteenthCheckbox] = useLocalStorageList('Check Box L3C', true);

    const [iternary, setIternary] = useLocalStorageList('Iternary', []);
    const [seventeenthCheckbox, setSeventeenthCheckbox] = useLocalStorageList('Check Box Iternary', true);

    const [subsDue2, setSubsDue2] = useLocalStorageList('Subs Due 2', []);
    const [eighteenthCheckbox, setEighteenthCheckbox] = useLocalStorageList('Check Box Subs Due 2', true);

    const [tbokApproved, setTbokApproved] = useLocalStorageList('TBOK Approved', []);
    const [nineteenthCheckbox, setNineteenthCheckbox] = useLocalStorageList('Check Box TBOK Approved', true);

    const [firmFor, setFirmFor] = useLocalStorageList('Firm For', []);
    const [twentiethCheckbox, setTwentiethCheckbox] = useLocalStorageList('Check Box Firm For', true);

    const handleSubmit = () => {
        const VesselName = document.getElementById('VesselName');
        const Account = document.getElementById('Account');
        const LoadRange = document.getElementById('LoadRange');
        const DischargeRange = document.getElementById('DischargeRange');
        const Laycan = document.getElementById('Laycan');
        const Quantity = document.getElementById('Quantity');
        const Grade = document.getElementById('Grade');
        const Freight = document.getElementById('Freight');
        const FreightUnits = document.getElementById('FreightUnits');
        const Overage = document.getElementById('Overage');
        const Demurrage = document.getElementById('Demurrage');
        const DemurrageUnits = document.getElementById('DemurrageUnits');
        const Laytime = document.getElementById('Laytime');
        const AddCom = document.getElementById('Add.Com');
        const BrokerCom = document.getElementById('Broker.Com');

        const AmmLastDone = document.getElementById('AmmLastDone');
        const SubsDue = document.getElementById('SubsDue');
        const L3C = document.getElementById('L3C');
        const Iternary = document.getElementById('Iternary');
        const SubsDue2 = document.getElementById('SubsDue2');
        const TbokApproved = document.getElementById('TBOK');
        const FirmFor = document.getElementById('FirmFor');

        //set values from form to local storage
        if (!VesselName.disabled && vesselName[vesselName.length - 1] !== VesselName.value) {
            setVesselName([...vesselName, VesselName.value]);
        }

        if (!Account.disabled && account[account.length - 1] !== Account.value) {
            setAccount([...account, Account.value]);
        }

        if (!LoadRange.disabled && loadRange[loadRange.length - 1] !== LoadRange.value) {
            setLoadRange([...loadRange, LoadRange.value]);
        }

        if (!DischargeRange.disabled && dischargeRange[dischargeRange.length - 1] !== DischargeRange.value) {
            setDischargeRange([...dischargeRange, DischargeRange.value]);
        }

        if (!Laycan.disabled && laycan[laycan.length - 1] !== Laycan.value) {
            setLaycan([...laycan, Laycan.value]);
        }

        if (!Quantity.disabled && quantity[quantity.length - 1] !== +Quantity.value) {
            setQuantity([...quantity, +Quantity.value]);
        }

        if (!Grade.disabled && grade[grade.length - 1] !== Grade.value) {
            setGrade([...grade, Grade.value]);
        }

        if (!Freight.disabled && freight[freight.length - 1] !== Freight.value) {
            setFreight([...freight, Freight.value]);
        }

        if (!FreightUnits.disabled && freightUnits[freightUnits.length - 1] !== FreightUnits.value) {
            setFreightUnits([...freightUnits, FreightUnits.value]);
        }

        if (!Overage.disabled && overage[overage.length - 1] !== +Overage.value) {
            setOverage([...overage, +Overage.value]);
        }

        if (!Demurrage.disabled && demurrage[demurrage.length - 1] !== +Demurrage.value) {
            setDemurrage([...demurrage, +Demurrage.value]);
        }

        if (!DemurrageUnits.disabled && demurrageUnits[demurrageUnits.length - 1] !== DemurrageUnits.value) {
            setDemurrageUnits([...demurrageUnits, DemurrageUnits.value]);
        }

        if (!Laytime.disabled && laytime[laytime.length - 1] !== +Laytime.value) {
            setLaytime([...laytime, +Laytime.value]);
        }

        if (!AddCom.disabled && addCom[addCom.length - 1] !== +AddCom.value) {
            setAddCom([...addCom, +AddCom.value]);
        }

        if (!BrokerCom.disabled && brokerCom[brokerCom.length - 1] !== +BrokerCom.value) {
            setBrokerCom([...brokerCom, +BrokerCom.value]);
        }

        if (!AmmLastDone.disabled && ammLastDone[ammLastDone.length - 1] !== AmmLastDone.value) {
            setAmmLastDone([...ammLastDone, AmmLastDone.value]);
        }

        if (!SubsDue.disabled && subsDue[subsDue.length - 1] !== SubsDue.value) {
            setSubsDue([...subsDue, SubsDue.value]);
        }

        if (!L3C.disabled && l3c[l3c.length - 1] !== L3C.value) {
            setl3c([...l3c, L3C.value]);
        }

        if (!Iternary.disabled && iternary[iternary.length - 1] !== Iternary.value) {
            setIternary([...iternary, Iternary.value]);
        }

        if (!SubsDue2.disabled && subsDue2[subsDue2.length - 1] !== SubsDue2.value) {
            setSubsDue2([...subsDue2, SubsDue2.value]);
        }

        if (!TbokApproved.disabled && tbokApproved[tbokApproved.length - 1] !== TbokApproved.value) {
            setTbokApproved([...tbokApproved, TbokApproved.value]);
        }

        if (!FirmFor.disabled && firmFor[firmFor.length - 1] !== +FirmFor.value) {
            setFirmFor([...firmFor, +FirmFor.value]);
        }

        if (formStatus === null) {
            setFormStatus('Proposed');
        }

        if (formStatus === 'Proposed' && activeAccount === 'Bob') {
            setFormStatus('counteroffer');
        }

        timer(timerValue);
        setAllCheckboxTrue();
    };

    // set checkbox status to local storage
    const handleCheckBox = () => {
        const FirstCheckbox = document.getElementById('1stCheckBox');
        setFirstCheckbox(FirstCheckbox.checked);

        const SecondCheckbox = document.getElementById('2ndCheckBox');
        setSecondCheckbox(SecondCheckbox.checked);

        const ThirdCheckbox = document.getElementById('3rdCheckBox');
        setThirdCheckbox(ThirdCheckbox.checked);

        const FourthCheckbox = document.getElementById('4thCheckBox');
        setFourthCheckbox(FourthCheckbox.checked);

        const FifthCheckbox = document.getElementById('5thCheckBox');
        setFifthCheckbox(FifthCheckbox.checked);

        const SixthCheckbox = document.getElementById('6thCheckBox');
        setSixthCheckbox(SixthCheckbox.checked);

        const SeventhCheckbox = document.getElementById('7thCheckBox');
        setSeventhCheckbox(SeventhCheckbox.checked);

        const EighthCheckbox = document.getElementById('8thCheckBox');
        setEighthCheckbox(EighthCheckbox.checked);

        const NinethCheckbox = document.getElementById('9thCheckBox');
        setNinethCheckbox(NinethCheckbox.checked);

        const TenthCheckbox = document.getElementById('10thCheckBox');
        setTenthCheckbox(TenthCheckbox.checked);

        const EleventhCheckbox = document.getElementById('11thCheckBox');
        setEleventhCheckbox(EleventhCheckbox.checked);

        const TwelfthCheckbox = document.getElementById('12thCheckBox');
        setTwelfthCheckbox(TwelfthCheckbox.checked);

        const ThirteenthCheckbox = document.getElementById('13thCheckBox');
        setThirteenthCheckbox(ThirteenthCheckbox.checked);

        const FourteenthCheckbox = document.getElementById('14thCheckBox');
        setFourteenthCheckbox(FourteenthCheckbox.checked);

        const FifteenthCheckbox = document.getElementById('15thCheckBox');
        setFifteenthCheckbox(FifteenthCheckbox.checked);

        const SixteenthCheckbox = document.getElementById('16thCheckBox');
        setSixteenthCheckbox(SixteenthCheckbox.checked);

        const SeventeenthCheckbox = document.getElementById('17thCheckBox');
        setSeventeenthCheckbox(SeventeenthCheckbox.checked);

        const EighteenthCheckbox = document.getElementById('18thCheckBox');
        setEighteenthCheckbox(EighteenthCheckbox.checked);

        const NineteenthCheckbox = document.getElementById('19thCheckBox');
        setNineteenthCheckbox(NineteenthCheckbox.checked);

        const TwentiethCheckbox = document.getElementById('20thCheckBox');
        setTwentiethCheckbox(TwentiethCheckbox.checked);
    };

    // function which display currently offer status in h3
    const offerStatus = (formStatus, activeAccount) => {
        if (formStatus === 'Proposed' && activeAccount === 'Alice') {
            return `Your proposal has been sent and is pending`;
        }

        if (formStatus === 'ACCEPTED' && activeAccount === 'Alice') {
            return 'You proposal was accepted';
        }

        if (formStatus === 'DECLINED' && activeAccount === 'Alice') {
            return 'You proposal was declined';
        }

        if (formStatus === 'counteroffer' && activeAccount === 'Alice') {
            return 'The customer has made changes to your offer';
        }

        if (formStatus === 'Proposed' && activeAccount === 'Bob') {
            return `The proposal is awaiting for your consideration`;
        }

        if (formStatus === 'ACCEPTED' && activeAccount === 'Bob') {
            return 'You accepted this proposal';
        }

        if (formStatus === 'DECLINED' && activeAccount === 'Bob') {
            return 'You declined this proposal';
        }
        if (formStatus === 'counteroffer' && activeAccount === 'Bob') {
            return 'You suggested changes to the proposal';
        }
    };

    // function which return className for styling h3
    const orderDecision = () => {
        if (formStatus === 'Proposed') {
            return 'Proposed';
        }
        if (formStatus === 'DECLINED') {
            return 'declined';
        }
        if (formStatus === 'ACCEPTED') {
            return 'accepted';
        }
        if (formStatus === 'counteroffer') {
            return 'counteroffer';
        }
    };

    //let temp = 0;
    // Нужное количество секунд
    const timer = (remainingSeconds, d, h, m, s) => {
        if (formStatus === null || formStatus === 'Proposed' || formStatus === 'counteroffer') {
            var finishTime = new Date();
            finishTime.setSeconds(finishTime.getSeconds() + remainingSeconds);
            let timeLeft = document.getElementById('timer');
            var timesOver;

            function update() {
                // сколько осталось миллисекунд
                var diff = finishTime - new Date();
                // сколько миллисекунд до конца секунды
                var millis = diff % 1000;
                diff = Math.floor(diff / 1000);
                // сколько секунд до конца минуты
                var sec = diff % 60;
                if (sec < 10) sec = '0' + sec;
                diff = Math.floor(diff / 60);
                // сколько минут до конца часа
                var min = diff % 60;
                if (min < 10) min = '0' + min;
                diff = Math.floor(diff / 60);
                // сколько часов до конца дня
                var hours = diff % 24;
                if (hours < 10) hours = '0' + hours;
                var days = Math.floor(diff / 24);

                d = +days;
                h = +hours;
                m = +min;
                s = +sec;

                timeLeft.innerHTML = `Offer is valid for ${m} minutes ${s} seconds`;

                // возвращаем оставшееся колличество секунд
                timesOver = d * 86400 + h * 3600 + m * 60 + s;

                setTimerValue(timesOver);

                // Если время закончилось - выводим заглушку
                if (timesOver === 0) {
                    return (timeLeft.innerHTML = `Offer timed out`);
                }

                // следующий раз вызываем себя, когда закончится текущая секунда
                //clearTimeout(temp);
                setTimeout(update, millis);
            }
            setTimeout(update, 0);
        }
    };

    // function which make input disabled, if an offer is made
    const checkInputStatus = (numCheckbox) => {
        if (formStatus !== null && activeAccount === 'Alice') {
            return true;
        }

        if (activeAccount === 'Bob' && numCheckbox) {
            return true;
        }
    };

    // function needed for changes button Decision from 'Accept' to 'Make a counterOffer'
    const checkAllCheckboxStatus = () => {
        if (
            firstCheckbox &&
            secondCheckbox &&
            thirdCheckbox &&
            fourthCheckbox &&
            fifthCheckbox &&
            sixthCheckbox &&
            seventhCheckbox &&
            eighthCheckbox &&
            ninethCheckbox &&
            tenthCheckbox &&
            eleventhCheckbox &&
            twelfthCheckbox &&
            thirteenthCheckbox &&
            fourteenthCheckbox &&
            fifteenthCheckbox &&
            sixteenthCheckbox &&
            seventeenthCheckbox &&
            eighteenthCheckbox &&
            nineteenthCheckbox &&
            twentiethCheckbox === true
        ) {
            return true;
        }
    };

    // Set true value to all Checkboxes for correct visible decisions button in response interface, when form status is counteroffer
    const setAllCheckboxTrue = () => {
        setFirstCheckbox(true);
        setSecondCheckbox(true);
        setThirdCheckbox(true);
        setFourthCheckbox(true);
        setFifthCheckbox(true);
        setSixthCheckbox(true);
        setSeventhCheckbox(true);
        setEighthCheckbox(true);
        setNinethCheckbox(true);
        setTenthCheckbox(true);
        setEleventhCheckbox(true);
        setTwelfthCheckbox(true);
        setThirteenthCheckbox(true);
        setFourteenthCheckbox(true);
        setFifteenthCheckbox(true);
        setSixteenthCheckbox(true);
        setSeventeenthCheckbox(true);
        setEighteenthCheckbox(true);
        setNineteenthCheckbox(true);
        setTwentiethCheckbox(true);
    };

    // function for styling inputs. Return className
    const inputClassName = (numCheckbox, state) => {
        if (numCheckbox && activeAccount === 'Bob') {
            return 'succesCheckBox';
        }

        if (state.length > 1 && activeAccount === 'Alice') {
            return 'changedInput';
        }
    };

    // function for display message about changing input data. Return className
    const paragraphChangingVisible = (inputName) => {
        if (inputName.length > 1 && activeAccount === 'Alice') {
            return 'inputChanged';
        } else {
            return 'inputChanged non-visible';
        }
    };

    const resetLocalStorage = () => {
        setTimerValue(1800);
        setVesselName([]);
        setFirstCheckbox(true);
        setAccount([]);
        setSecondCheckbox(true);
        setLoadRange([]);
        setThirdCheckbox(true);
        setDischargeRange([]);
        setFourthCheckbox(true);
        setLaycan([]);
        setFifthCheckbox(true);
        setQuantity([]);
        setSixthCheckbox(true);
        setGrade([]);
        setSeventhCheckbox(true);
        setFreight([]);
        setEighthCheckbox(true);
        setFreightUnits([]);
        setOverage([]);
        setNinethCheckbox(true);
        setDemurrage([]);
        setTenthCheckbox(true);
        setDemurrageUnits([]);
        setLaytime([]);
        setEleventhCheckbox(true);
        setAddCom([]);
        setTwelfthCheckbox(true);
        setBrokerCom([]);
        setThirteenthCheckbox(true);
        setAmmLastDone([]);
        setFourteenthCheckbox(true);
        setSubsDue([]);
        setFifteenthCheckbox(true);
        setl3c([]);
        setSixteenthCheckbox(true);
        setIternary([]);
        setSeventeenthCheckbox(true);
        setSubsDue2([]);
        setEighteenthCheckbox(true);
        setTbokApproved([]);
        setNineteenthCheckbox(true);
        setFirmFor([]);
        setTwentiethCheckbox(true);

        setFormStatus(null);
        setActiveAccount('Alice');
    };

    // Send email, when Alice submited form
    const sendEmail = (e) => {
        e = e || window.event;

        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('gmail', 'maritech', e.target, 'user_ERKzPIkK5byCFbAKgFKlO').then(
            (result) => {
                //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    //Combining two functions into one
    const submitHandler = () => {
        handleSubmit();
        sendEmail();
    };

    const svgRefreshPage = (
        <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-repeat"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            />
        </svg>
    );

    const svgXcircle = (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
                fillRule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
        </svg>
    );

    const svgAddField = (
        <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-plus-square"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
            <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
        </svg>
    );

    return (
        <div className="main-content-container px-4 container-fluid">
            <span>
                {' '}
                {/* Reset local storage button */}
                <a
                    href="/ant-demo/"
                    onClick={() => resetLocalStorage()}
                    style={{ color: 'silver', float: 'right' }}
                >
                    {svgRefreshPage}
                </a>
            </span>

            {activeAccount === 'Bob' && formStatus === null ? (
                <h3>No new offers</h3>
            ) : (
                <div className="formContainer">
                    <h2>Start New Negotiation</h2>
                    <nav className="d-flex formNav">
                        <button href="#" className="nav-link active">
                            Americano
                        </button>
                        <button href="#" className="nav-link">
                            Flat White
                        </button>
                        <button href="#" className="nav-link">
                            Black Coffee
                        </button>
                    </nav>
                    <h3 className={orderDecision()}>{offerStatus(formStatus, activeAccount)}</h3>
                    <div className="totalTime"></div>
                    <h4 id="timer"> </h4>
                    <div className="preForm d-flex">
                        <label className="d-inline-flex">Participants</label>
                        <div className="participants d-inline-flex">
                            <button className="participantsMembers" type="button">
                                Alice B. {svgXcircle}
                            </button>
                            <button className="participantsMembers" type="button">
                                Bob A. {svgXcircle}
                            </button>

                            <button type="button">{svgAddField}</button>
                        </div>

                        <div className="currency">
                            Currency:
                            <span>USD</span>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={() => submitHandler()}>
                        <div className="formItem">
                            <label>Vessel Name</label>
                            <select
                                id="VesselName"
                                defaultValue={vesselName[vesselName.length - 1]}
                                className={inputClassName(firstCheckbox, vesselName)}
                                disabled={checkInputStatus(firstCheckbox)}
                            >
                                <option>Select Name №1</option>
                                <option>Select Name №2</option>
                            </select>
                            {activeAccount === 'Bob' ? (
                                <input
                                    onChange={() => handleCheckBox()}
                                    type="checkbox"
                                    id="1stCheckBox"
                                    defaultChecked={firstCheckbox ? true : false}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(vesselName)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {vesselName[vesselName.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Account</label>
                            <select
                                id="Account"
                                defaultValue={account[account.length - 1]}
                                className={inputClassName(secondCheckbox, account)}
                                disabled={checkInputStatus(secondCheckbox)}
                            >
                                <option>Select Account №1</option>
                                <option>Select Account №2</option>
                            </select>
                            {activeAccount === 'Bob' ? (
                                <input
                                    onChange={() => handleCheckBox()}
                                    type="checkbox"
                                    id="2ndCheckBox"
                                    defaultChecked={secondCheckbox ? true : false}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(account)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {account[account.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Load Range</label>
                            <input
                                id="LoadRange"
                                type="text"
                                placeholder="Placeholder"
                                defaultValue={loadRange[loadRange.length - 1]}
                                className={inputClassName(thirdCheckbox, loadRange)}
                                disabled={checkInputStatus(thirdCheckbox)}
                            />
                            <button type="button">{svgAddField}</button>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="3rdCheckBox"
                                    defaultChecked={thirdCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(loadRange)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {loadRange[loadRange.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Discharge Range</label>
                            <input
                                id="DischargeRange"
                                type="text"
                                defaultValue={dischargeRange[dischargeRange.length - 1]}
                                disabled={checkInputStatus(fourthCheckbox)}
                                className={inputClassName(fourthCheckbox, dischargeRange)}
                            />
                            <button type="button">{svgAddField}</button>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="4thCheckBox"
                                    defaultChecked={fourthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(dischargeRange)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {dischargeRange[dischargeRange.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Laycan</label>
                            <input
                                id="Laycan"
                                type="date"
                                defaultValue={laycan[laycan.length - 1]}
                                disabled={checkInputStatus(fifthCheckbox)}
                                className={inputClassName(fifthCheckbox, laycan)}
                            />
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="5thCheckBox"
                                    defaultChecked={fifthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(laycan)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {laycan[laycan.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Quantity</label>
                            <input
                                id="Quantity"
                                type="number"
                                defaultValue={quantity[quantity.length - 1]}
                                disabled={checkInputStatus(sixthCheckbox)}
                                className={inputClassName(sixthCheckbox, quantity)}
                            />
                            <span className="units">MT</span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="6thCheckBox"
                                    defaultChecked={sixthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(quantity)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {quantity[quantity.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Grade</label>
                            <input
                                id="Grade"
                                type="text"
                                defaultValue={grade[grade.length - 1]}
                                disabled={checkInputStatus(seventhCheckbox)}
                                className={inputClassName(seventhCheckbox, grade)}
                            />
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="7thCheckBox"
                                    defaultChecked={seventhCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}
                            <p className={paragraphChangingVisible(grade)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {grade[grade.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Freight</label>
                            <input
                                id="Freight"
                                type="number"
                                placeholder="140"
                                defaultValue={freight[freight.length - 1]}
                                disabled={checkInputStatus(eighthCheckbox)}
                                className={inputClassName(eighthCheckbox, freight)}
                            />
                            <select
                                id="FreightUnits"
                                defaultValue={freightUnits[freightUnits.length - 1]}
                                disabled={checkInputStatus(eighthCheckbox)}
                                className={inputClassName(eighthCheckbox, freight)}
                            >
                                <option>WS</option>
                                <option>SE</option>
                            </select>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="8thCheckBox"
                                    defaultChecked={eighthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(freight)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {freight[freight.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Overage</label>
                            <input
                                id="Overage"
                                type="number"
                                placeholder="140"
                                defaultValue={overage[overage.length - 1]}
                                disabled={checkInputStatus(ninethCheckbox)}
                                className={inputClassName(ninethCheckbox, overage)}
                            />
                            <span className="units">%</span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="9thCheckBox"
                                    defaultChecked={ninethCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(overage)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {overage[overage.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Demurrage</label>
                            <input
                                id="Demurrage"
                                type="number"
                                placeholder="25000"
                                defaultValue={demurrage[demurrage.length - 1]}
                                disabled={checkInputStatus(tenthCheckbox)}
                                className={inputClassName(tenthCheckbox, demurrage)}
                            />
                            <select
                                id="DemurrageUnits"
                                defaultValue={demurrageUnits[demurrageUnits.length - 1]}
                                disabled={checkInputStatus(tenthCheckbox)}
                                className={inputClassName(tenthCheckbox, demurrage)}
                            >
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="10thCheckBox"
                                    defaultChecked={tenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(demurrage)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {demurrage[demurrage.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Laytime</label>
                            <input
                                id="Laytime"
                                type="number"
                                placeholder="24"
                                defaultValue={laytime[laytime.length - 1]}
                                disabled={checkInputStatus(eleventhCheckbox)}
                                className={inputClassName(eleventhCheckbox, laytime)}
                            />
                            <span className="units">Hours</span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="11thCheckBox"
                                    defaultChecked={eleventhCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(laytime)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {laytime[laytime.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Add. Com</label>
                            <input
                                id="Add.Com"
                                type="number"
                                placeholder="25"
                                defaultValue={addCom[addCom.length - 1]}
                                disabled={checkInputStatus(twelfthCheckbox)}
                                className={inputClassName(twelfthCheckbox, addCom)}
                            />
                            <span className="units">%</span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="12thCheckBox"
                                    defaultChecked={twelfthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(addCom)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {addCom[addCom.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Broker. Com</label>
                            <input
                                id="Broker.Com"
                                type="number"
                                placeholder="25"
                                defaultValue={brokerCom[brokerCom.length - 1]}
                                disabled={checkInputStatus(thirteenthCheckbox)}
                                className={inputClassName(thirteenthCheckbox, brokerCom)}
                            />
                            <span className="units">%</span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="13thCheckBox"
                                    defaultChecked={thirteenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(thirteenthCheckbox)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal:{' '}
                                {thirteenthCheckbox[thirteenthCheckbox.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Last done</label>
                            <input type="file" name="file" id="file" className="inputfile" />
                            <label htmlFor="file">Choose file</label>
                        </div>
                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className="formItem">
                            <label>Amm. last done</label>
                            <input
                                id="AmmLastDone"
                                type="text"
                                defaultValue={ammLastDone[ammLastDone.length - 1]}
                                className={inputClassName(fourteenthCheckbox, ammLastDone)}
                                disabled={checkInputStatus(fourteenthCheckbox)}
                            />
                            <button type="button">{svgAddField}</button>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="14thCheckBox"
                                    defaultChecked={fourteenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(ammLastDone)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {ammLastDone[ammLastDone.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Subs due</label>
                            <input
                                type="date"
                                id="SubsDue"
                                defaultValue={subsDue[subsDue.length - 1]}
                                className={inputClassName(fifteenthCheckbox, subsDue)}
                                disabled={checkInputStatus(fifteenthCheckbox)}
                            />
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="15thCheckBox"
                                    defaultChecked={fifteenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(subsDue)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {subsDue[subsDue.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>L3C</label>
                            <input
                                id="L3C"
                                type="text"
                                defaultValue={l3c[l3c.length - 1]}
                                className={inputClassName(sixteenthCheckbox, l3c)}
                                disabled={checkInputStatus(sixteenthCheckbox)}
                            />
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="16thCheckBox"
                                    defaultChecked={sixteenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(l3c)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {l3c[l3c.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Iternary</label>
                            <input
                                id="Iternary"
                                type="text"
                                defaultValue={iternary[iternary.length - 1]}
                                className={inputClassName(seventeenthCheckbox, iternary)}
                                disabled={checkInputStatus(seventeenthCheckbox)}
                            />
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="17thCheckBox"
                                    defaultChecked={seventeenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(iternary)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {iternary[iternary.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Subs due</label>
                            <input
                                id="SubsDue2"
                                type="date"
                                defaultValue={subsDue2[subsDue2.length - 1]}
                                className={inputClassName(eighteenthCheckbox, subsDue2)}
                                disabled={checkInputStatus(eighteenthCheckbox)}
                            />
                            <span className="units empty"></span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="18thCheckBox"
                                    defaultChecked={eighteenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(subsDue2)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {subsDue2[subsDue2.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>TBOK Approved</label>
                            <input
                                id="TBOK"
                                type="text"
                                defaultValue={tbokApproved[tbokApproved.length - 1]}
                                className={inputClassName(nineteenthCheckbox, tbokApproved)}
                                disabled={checkInputStatus(nineteenthCheckbox)}
                            />
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="19thCheckBox"
                                    defaultChecked={nineteenthCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(tbokApproved)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {tbokApproved[tbokApproved.length - 2]}
                            </p>
                        </div>

                        <div className="formItem">
                            <label>Firm for</label>
                            <input
                                id="FirmFor"
                                type="number"
                                placeholder="15"
                                defaultValue={firmFor[firmFor.length - 1]}
                                className={inputClassName(twentiethCheckbox, firmFor)}
                                disabled={checkInputStatus(twentiethCheckbox)}
                            />
                            <span className="units">Min</span>
                            {activeAccount === 'Bob' ? (
                                <input
                                    type="checkbox"
                                    id="20thCheckBox"
                                    defaultChecked={twentiethCheckbox ? true : false}
                                    onChange={() => handleCheckBox()}
                                />
                            ) : null}

                            <p className={paragraphChangingVisible(firmFor)}>
                                This item was changed by the client This clause has been changed by the
                                client, your previous proposal: {firmFor[firmFor.length - 2]}
                            </p>
                        </div>

                        {activeAccount === 'Alice' && formStatus === null ? (
                            <div className="response">
                                <button className="sendForm" type="submit">
                                    Submit
                                </button>
                            </div>
                        ) : (
                            <div>
                                {(formStatus === 'Proposed' && activeAccount === 'Bob') ||
                                (formStatus === 'counteroffer' && activeAccount === 'Alice') ? (
                                    <div className="response">
                                        <button
                                            type="button"
                                            className="accept"
                                            onClick={
                                                checkAllCheckboxStatus()
                                                    ? () => setFormStatus('ACCEPTED')
                                                    : () => handleSubmit()
                                            }
                                        >
                                            {checkAllCheckboxStatus() ? 'ACCEPT' : 'Make a counter offer'}
                                        </button>

                                        <button
                                            type="button"
                                            className="decline"
                                            onClick={() => setFormStatus('DECLINED')}
                                        >
                                            DECLINE
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
}
export default NewNegotiation;
