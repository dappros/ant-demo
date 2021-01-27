import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { svgRefreshPage, svgXcircle, svgAddField } from './components/svgComponents'
import useLocalStorage from './components/localStorageList'
import { sendEmailToBob, sendEmailToAlice } from './components/emailSendler'
import SimpleModal from './components/SimpleModal'


function NewNegotiation({ formStatus, setFormStatus, activeAccount, setActiveAccount }) {

    useEffect(() => {
        if (localState.timerValue < 1800 && localState.negotiationStatus !== null) {
            timer(localState.timerValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //const [participants, setParticipants] = React.useState([]);
    const localState = useLocalStorage(); //local storage keys

    const handleSubmit = () => {

        const OfferType = document.getElementById('OfferType')
        const NegotiationTitle = document.getElementById('NegotiationTitle')
        const VesselName = document.getElementById('VesselName')
        const Account = document.getElementById('Account')
        const LoadRange = document.getElementById('LoadRange')
        const DischargeRange = document.getElementById('DischargeRange')
        const Laycan = document.getElementById('Laycan')
        const LaycanEnd = document.getElementById('LaycanEnd')
        const Quantity = document.getElementById('Quantity')
        const QuantitytUnits = document.getElementById('QuantitytUnits')
        const Grade = document.getElementById('Grade')
        const Freight = document.getElementById('Freight')
        const FreightUnits = document.getElementById('FreightUnits')
        const Overage = document.getElementById('Overage')
        const OverageUnits = document.getElementById('OverageUnits')
        const Demurrage = document.getElementById('Demurrage')
        const DemurrageUnits = document.getElementById('DemurrageUnits')
        const Laytime = document.getElementById('Laytime')
        const LaytimeUnits = document.getElementById('LaytimeUnits')
        const AddCom = document.getElementById('Add.Com')
        const BrokerCom = document.getElementById('Broker.Com')
        const AmmLastDone = document.getElementById('AmmLastDone')
        const SubsDue = document.getElementById('SubsDue')
        const L3C = document.getElementById('L3C')
        const Itinerary = document.getElementById('Itinerary')
        // const SubsDue2 = document.getElementById('SubsDue2')
        const TbokApproved = document.getElementById('TBOK')
        const OtherTextArea = document.getElementById('OtherTextArea')
        const FirmFor = document.getElementById('FirmFor')
        const FirmForUnits = document.getElementById('FirmForUnits')


        //set values from form to local storage
        if (!OfferType.disabled && localState.offerType[localState.offerType.length - 1] !== OfferType.value) {
            localState.setOfferType([...localState.offerType, OfferType.value])
        }

        if (!NegotiationTitle.disabled && localState.negotiationTitle[localState.negotiationTitle.length - 1] !== NegotiationTitle.value) {
            localState.setNegotiationTitle(NegotiationTitle.value)
        }

        if (!VesselName.disabled && localState.vesselName[localState.vesselName.length - 1] !== VesselName.value) {
            localState.setVesselName([...localState.vesselName, VesselName.value])
            //localState.setVesselNameHistory([...localState.vesselNameHistory, `${localState.vesselName.length + 1}. At ${nowTime} by ${activeAccount}: ${VesselName.value}`])
        }

        if (!Account.disabled && localState.account[localState.account.length - 1] !== Account.value) {
            localState.setAccount([...localState.account, Account.value])
            //localState.setAccountHistory([...localState.accountHistory, `${localState.account.length + 1}. At ${nowTime} by ${activeAccount}: ${Account.value}`])
        }

        if (!LoadRange.disabled && localState.loadRange[localState.loadRange.length - 1] !== LoadRange.value) {
            localState.setLoadRange([...localState.loadRange, LoadRange.value])
            localState.setLoadRangeHistory([...localState.loadRangeHistory, `${localState.loadRange.length + 1}. At ${nowTime} by ${activeAccount}: ${LoadRange.value}`])
        }

        if (!DischargeRange.disabled && localState.dischargeRange[localState.dischargeRange.length - 1] !== DischargeRange.value) {
            localState.setDischargeRange([...localState.dischargeRange, DischargeRange.value]);
            localState.setDischargeRangeHistory([...localState.dischargeRangeHistory, `${localState.dischargeRange.length + 1}. At ${nowTime} by ${activeAccount}: ${DischargeRange.value}`])
        }

        if (!Laycan.disabled && localState.laycan[localState.laycan.length - 1] !== Laycan.value) {
            localState.setLaycan([...localState.laycan, Laycan.value]);
            localState.setLaycanHistory([...localState.laycanHistory, `${localState.laycan.length + 1}. At ${nowTime} by ${activeAccount}: From ${Laycan.value} to ${LaycanEnd.value}`])
        }

        if (!LaycanEnd.disabled && localState.laycanEnd[localState.laycanEnd.length - 1] !== LaycanEnd.value) {
            localState.setLaycanEnd([...localState.laycanEnd, LaycanEnd.value]);
            localState.setLaycanEndHistory([...localState.laycanEndHistory, `${localState.laycanEnd.length + 1}. At ${nowTime} by ${activeAccount}: From ${Laycan.value} to ${LaycanEnd.value}`])
        }

        if (!Quantity.disabled && localState.quantity[localState.quantity.length - 1] !== +Quantity.value) {
            localState.setQuantity([...localState.quantity, +Quantity.value]);
            localState.setQuantityHistory([...localState.quantityHistory, `${localState.quantity.length + 1}. At ${nowTime} by ${activeAccount}: ${Quantity.value}`])
        }

        if (!QuantitytUnits.disabled && localState.quantityUnits[localState.quantityUnits.length - 1] !== QuantitytUnits.value) {
            localState.setQuantityUnits([...localState.quantityUnits, QuantitytUnits.value]);
        }

        if (!Grade.disabled && localState.grade[localState.grade.length - 1] !== Grade.value) {
            localState.setGrade([...localState.grade, Grade.value]);
            localState.setGradeHistory([...localState.gradeHistory, `${localState.grade.length + 1}. At ${nowTime} by ${activeAccount}: ${Grade.value}`])
        }

        if (!Freight.disabled && localState.freight[localState.freight.length - 1] !== Freight.value) {
            localState.setFreight([...localState.freight, Freight.value]);
            localState.setFreightHistory([...localState.freightHistory, `${localState.freight.length + 1}. At ${nowTime} by ${activeAccount}: ${Freight.value}`])
        }

        if (!FreightUnits.disabled && localState.freightUnits[localState.freightUnits.length - 1] !== FreightUnits.value) {
            localState.setFreightUnits([...localState.freightUnits, FreightUnits.value]);
        }

        if (!Overage.disabled && localState.overage[localState.overage.length - 1] !== +Overage.value) {
            localState.setOverage([...localState.overage, +Overage.value]);
            localState.setOverageHistory([...localState.overageHistory, `${localState.overage.length + 1}. At ${nowTime} by ${activeAccount}: ${Overage.value}`])
        }

        if (!OverageUnits.disabled && localState.overageUnits[localState.overageUnits.length - 1] !== OverageUnits.value) {
            localState.setOverageUnits([...localState.freightUnits, OverageUnits.value]);
        }

        if (!Demurrage.disabled && localState.demurrage[localState.demurrage.length - 1] !== +Demurrage.value) {
            localState.setDemurrage([...localState.demurrage, +Demurrage.value]);
            localState.setDemurrageHistory([...localState.demurrageHistory, `${localState.demurrage.length + 1}. At ${nowTime} by ${activeAccount}: ${Demurrage.value}`])
        }

        if (!DemurrageUnits.disabled && localState.demurrageUnits[localState.demurrageUnits.length - 1] !== DemurrageUnits.value) {
            localState.setDemurrageUnits([...localState.demurrageUnits, DemurrageUnits.value]);
        }

        if (!Laytime.disabled && localState.laytime[localState.laytime.length - 1] !== +Laytime.value) {
            localState.setLaytime([...localState.laytime, +Laytime.value]);
            localState.setLaytimeHistory([...localState.laytimeHistory, `${localState.laytime.length + 1}. At ${nowTime} by ${activeAccount}: ${Laytime.value}`])
        }

        if (!LaytimeUnits.disabled && localState.laytimeUnits[localState.laytimeUnits.length - 1] !== LaytimeUnits.value) {
            localState.setLaytimeUnits([...localState.laytimeUnits, LaytimeUnits.value]);
        }

        if (!AddCom.disabled && localState.addCom[localState.addCom.length - 1] !== +AddCom.value) {
            localState.setAddCom([...localState.addCom, +AddCom.value]);
            localState.setAddComHistory([...localState.addComHistory, `${localState.addCom.length + 1}. At ${nowTime} by ${activeAccount}: ${AddCom.value}`])
        }

        if (!BrokerCom.disabled && localState.brokerCom[localState.brokerCom.length - 1] !== +BrokerCom.value) {
            localState.setBrokerCom([...localState.brokerCom, +BrokerCom.value]);
            localState.setBrokerComHistory([...localState.brokerComHistory, `${localState.brokerCom.length + 1}. At ${nowTime} by ${activeAccount}: ${BrokerCom.value}`])
        }

        if (!AmmLastDone.disabled && localState.ammLastDone[localState.ammLastDone.length - 1] !== AmmLastDone.value) {
            localState.setAmmLastDone([...localState.ammLastDone, AmmLastDone.value]);
            localState.setAmmLastDoneHistory([...localState.ammLastDoneHistory, `${localState.ammLastDone.length + 1}. At ${nowTime} by ${activeAccount}: ${AmmLastDone.value}`])
        }

        if (!SubsDue.disabled && localState.subsDue[localState.subsDue.length - 1] !== SubsDue.value) {
            localState.setSubsDue([...localState.subsDue, SubsDue.value]);
            localState.setSubsDueHistory([...localState.subsDueHistory, `${localState.subsDue.length + 1}. At ${nowTime} by ${activeAccount}: ${SubsDue.value}`])
        }

        if (!L3C.disabled && localState.l3c[localState.l3c.length - 1] !== L3C.value) {
            localState.setl3c([...localState.l3c, L3C.value]);
            localState.setl3cHistory([...localState.l3cHistory, `${localState.l3c.length + 1}. At ${nowTime} by ${activeAccount}: ${L3C.value}`])
        }

        if (!Itinerary.disabled && localState.itinerary[localState.itinerary.length - 1] !== Itinerary.value) {
            localState.setItinerary([...localState.itinerary, Itinerary.value]);
            localState.setItineraryHistory([...localState.itineraryHistory, `${localState.itinerary.length + 1}. At ${nowTime} by ${activeAccount}: ${Itinerary.value}`])
        }

        // if (!SubsDue2.disabled && subsDue2[subsDue2.length - 1] !== SubsDue2.value) {
        //     setSubsDue2([...subsDue2, SubsDue2.value]);
        //     setSubsDue2History([...subsDue2History, activeAccount + ':', SubsDue2.value, nowTime + ';'])
        // }

        if (!TbokApproved.disabled && localState.tbokApproved[localState.tbokApproved.length - 1] !== TbokApproved.value) {
            localState.setTbokApproved([...localState.tbokApproved, TbokApproved.value]);
            localState.setTbokApprovedHistory([...localState.tbokApprovedHistory, `${localState.tbokApproved.length + 1}. At ${nowTime} by ${activeAccount}: ${TbokApproved.value}`])
        }

        if (!OtherTextArea.disabled && localState.otherTextArea[localState.otherTextArea.length - 1] !== OtherTextArea.value) {
            localState.setOtherTextArea([...localState.otherTextArea, OtherTextArea.value]);
            localState.setOtherTextAreaHistory([...localState.otherTextAreaHistory, `${localState.otherTextArea.length + 1}. At ${nowTime} by ${activeAccount}: ${OtherTextArea.value}`])
        }

        if (!FirmFor.disabled && localState.firmFor[localState.firmFor.length - 1] !== +FirmFor.value) {
            localState.setFirmFor([...localState.firmFor, +FirmFor.value]);
            localState.setFirmForHistory([...localState.firmForHistory, `${localState.firmFor.length + 1}. At ${nowTime} by ${activeAccount}: ${FirmFor.value}`])
        }

        if (!FirmForUnits.disabled && localState.firmForUnits[localState.firmForUnits.length - 1] !== FirmForUnits.value) {
            localState.setFirmForUnits([...localState.firmForUnits, FirmForUnits.value]);
        }

        if (formStatus === null) {
            setFormStatus('Proposed')
            timer(localState.timerValue);
        }

        if (formStatus === 'Proposed' && activeAccount === 'Bob') {
            setFormStatus('counteroffer by Bob')
        }

        if (formStatus === 'counteroffer by Bob' && activeAccount === 'Alice') {
            setFormStatus('counteroffer by Alice')
        }

        if (formStatus === 'counteroffer by Alice' && activeAccount === 'Bob') {
            setFormStatus('counteroffer by Bob')
        }

        if (formStatus === null) {
            localState.setAllCheckboxTrue();
        }
    }

    // set checkbox status to local storage
    const handleCheckBox = () => {
        // const FirstCheckbox = document.getElementById('1stCheckBox')
        // setFirstCheckbox(FirstCheckbox.checked);

        // const SecondCheckbox = document.getElementById('2ndCheckBox')
        // setSecondCheckbox(SecondCheckbox.checked);

        const ThirdCheckbox = document.getElementById('3rdCheckBox')
        localState.setThirdCheckbox(ThirdCheckbox.checked);

        const FourthCheckbox = document.getElementById('4thCheckBox')
        localState.setFourthCheckbox(FourthCheckbox.checked);

        const FifthCheckbox = document.getElementById('5thCheckBox')
        localState.setFifthCheckbox(FifthCheckbox.checked);

        const SixthCheckbox = document.getElementById('6thCheckBox')
        localState.setSixthCheckbox(SixthCheckbox.checked);

        const SeventhCheckbox = document.getElementById('7thCheckBox')
        localState.setSeventhCheckbox(SeventhCheckbox.checked);

        const EighthCheckbox = document.getElementById('8thCheckBox')
        localState.setEighthCheckbox(EighthCheckbox.checked);

        const NinethCheckbox = document.getElementById('9thCheckBox')
        localState.setNinethCheckbox(NinethCheckbox.checked);

        const TenthCheckbox = document.getElementById('10thCheckBox')
        localState.setTenthCheckbox(TenthCheckbox.checked);

        const EleventhCheckbox = document.getElementById('11thCheckBox')
        localState.setEleventhCheckbox(EleventhCheckbox.checked);

        const TwelfthCheckbox = document.getElementById('12thCheckBox')
        localState.setTwelfthCheckbox(TwelfthCheckbox.checked);

        const ThirteenthCheckbox = document.getElementById('13thCheckBox')
        localState.setThirteenthCheckbox(ThirteenthCheckbox.checked);

        const FourteenthCheckbox = document.getElementById('14thCheckBox')
        localState.setFourteenthCheckbox(FourteenthCheckbox.checked);

        const FifteenthCheckbox = document.getElementById('15thCheckBox')
        localState.setFifteenthCheckbox(FifteenthCheckbox.checked);

        // const SixteenthCheckbox = document.getElementById('16thCheckBox')
        // setSixteenthCheckbox(SixteenthCheckbox.checked);

        // const SeventeenthCheckbox = document.getElementById('17thCheckBox')
        // setSeventeenthCheckbox(SeventeenthCheckbox.checked);

        // const EighteenthCheckbox = document.getElementById('18thCheckBox')
        // setEighteenthCheckbox(EighteenthCheckbox.checked);

        // const NineteenthCheckbox = document.getElementById('19thCheckBox')
        // setNineteenthCheckbox(NineteenthCheckbox.checked);

        // const TwentiethCheckbox = document.getElementById('20thCheckBox')
        // localState.setTwentiethCheckbox(TwentiethCheckbox.checked);

        const TwentyoneCheckbox = document.getElementById('21thCheckBox')
        localState.setTwentyoneCheckbox(TwentyoneCheckbox.checked);

        // const TwentytwoCheckbox = document.getElementById('22ndCheckBox')
        // setTwentytwoCheckbox(TwentytwoCheckbox.checked);

    }



    // function which display currently offer status in h3
    const offerStatus = (formStatus, activeAccount) => {

        if ((formStatus === 'Proposed' || formStatus === 'counteroffer by Alice') && activeAccount === 'Alice') {
            return `Your proposal has been sent and is pending`
        }

        if ((activeAccount === 'Alice' && (formStatus === 'ACCEPTED' || formStatus === `ACCEPTED with Alice's updates`))
            || (activeAccount === 'Bob' && formStatus === `ACCEPTED with Bob's updates`)) {
            return 'Congratulations! Your offer is accepted'
        }

        if ((activeAccount === 'Bob' && (formStatus === 'ACCEPTED' || formStatus === `ACCEPTED with Alice's updates`))
            || (activeAccount === 'Alice' && formStatus === `ACCEPTED with Bob's updates`)) {
            return 'You have accepted the proposal'
        }

        if (formStatus === 'DECLINED' && activeAccount === 'Alice') {
            return 'You proposal was declined'
        }

        if ((formStatus === 'counteroffer' || formStatus === 'counteroffer by Bob') && activeAccount === 'Alice') {
            return 'The customer has made changes to your offer'
        }

        if ((formStatus === 'Proposed' || formStatus === 'counteroffer by Alice') && activeAccount === 'Bob') {
            return `The proposal is awaiting for your consideration`
        }

        if (formStatus === 'DECLINED' && activeAccount === 'Bob') {
            return 'You declined this proposal'
        }
        if ((formStatus === 'counteroffer' || formStatus === 'counteroffer by Bob') && activeAccount === 'Bob') {
            return 'You have suggested changes'
        }
    }

    // function which return className for styling h3
    const orderDecision = () => {
        if (formStatus === 'Proposed') {
            return 'Proposed'
        }
        if (formStatus === 'DECLINED') {
            return 'declined'
        }
        if (formStatus === 'ACCEPTED') {
            return 'accepted'
        }
        if (formStatus === 'counteroffer' || formStatus === 'counteroffer by Bob' || formStatus === 'counteroffer by Alice') {
            return 'counteroffer'
        }
    }

    const nowTime = moment().format('(MM.DD.YY, HH:mm:ss)');
    //let temp = 0;
    // Нужное количество секунд
    const timer = (remainingSeconds, d, h, m, s) => {
        if (formStatus === null || formStatus === 'Proposed' || formStatus === 'counteroffer' || formStatus === 'counteroffer by Alice' || formStatus === 'counteroffer by Bob') {
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
                if (sec < 10) sec = "0" + sec;
                diff = Math.floor(diff / 60);
                // сколько минут до конца часа
                var min = diff % 60;
                if (min < 10) min = "0" + min;
                diff = Math.floor(diff / 60);
                // сколько часов до конца дня
                var hours = diff % 24;
                if (hours < 10) hours = "0" + hours;
                var days = Math.floor(diff / 24);



                d = +days;
                h = +hours;
                m = +min;
                s = +sec;



                timeLeft.innerHTML = `Offer is valid for ${m} minutes ${s} seconds`

                // возвращаем оставшееся колличество секунд
                timesOver = (d * 86400) + (h * 3600) + (m * 60) + s

                localState.setTimerValue(timesOver)

                // Если время закончилось - выводим заглушку
                if (timesOver === 0 || localState.timerValue === null) {
                    return timeLeft.innerHTML = `Offer timed out`
                }


                // следующий раз вызываем себя, когда закончится текущая секунда
                //clearTimeout(temp);
                setTimeout(update, millis);
            }
            setTimeout(update, 0);
        }
    }


    // function which make input disabled, if an offer is made
    const checkInputStatus = (numCheckbox) => {

        if (activeAccount === 'Alice' && (formStatus === 'counteroffer by Alice' || formStatus === 'Proposed')) {
            return true
        }

        if (activeAccount === 'Bob' && formStatus === 'counteroffer by Bob') {
            return true
        }

        if (numCheckbox) {
            return true;
        }

    }

    // const checkSpanIndex = index => {
    //     if (index === 1 || index === 4 || index === 7 || index === 10 || index === 13 || index === 16 || index === 19) {
    //         return 'bold'
    //     }
    // }


    // function for styling inputs. Return className
    const inputClassName = (numCheckbox, state) => {
        if (numCheckbox) {
            return 'succesCheckBox'
        }

        if (state.length > 1) {
            return 'changedInput'
        }
    }

    // function for display message about changing input data. Return className
    const paragraphChangingVisible = (inputName) => {
        if (inputName.length > 1) {
            return 'inputChanged'
        } else {
            return 'inputChanged non-visible'
        }
    }

    //Combining two functions into one
    const submitHandler = () => {
        handleSubmit()

        if (activeAccount === 'Alice') {
            sendEmailToBob();
        }
        if (activeAccount === 'Bob') {
            sendEmailToAlice();
        }
    }

    const timerClass = () => {
        if (formStatus === 'ACCEPTED' || formStatus === `ACCEPTED with Alice's updates` || formStatus === `ACCEPTED with Bob's updates` || formStatus === 'DECLINED' || formStatus === null) {
            return 'non-visible'
        }
    }

    const declineHandler = () => {
        let confirmDecline = window.confirm('Are you sure you would like to end this negotiation? This action cannot be undone.')
        if (confirmDecline) setFormStatus('DECLINED');

    }

    const resetHandler = () => {
        localState.resetLocalStorage();
        setFormStatus(null)
        setActiveAccount('Alice')
    }

    const checkboxVisible = () => {
        if ((formStatus !== 'ACCEPTED' && formStatus !== 'DECLINED' && formStatus !== `ACCEPTED with Alice's updates` && formStatus !== `ACCEPTED with Bob's updates`)
            && ((activeAccount === 'Bob' && formStatus !== 'counteroffer by Bob')
                || (activeAccount === 'Alice' && formStatus === 'counteroffer by Bob'))) {
            return true
        }
    }

    const onClickHandler = event => {
        if (event.target.value === 'Spot') {
            localState.setFullForm(true)
        } else {
            localState.setFullForm(false)
        }
    }

    const counteroffersCheck = () => {

        if (activeAccount === 'Alice' && formStatus === 'counteroffer by Bob') {
            return setFormStatus(`ACCEPTED with Bob's updates`)
        }

        if (activeAccount === 'Bob' && formStatus === 'counteroffer by Alice') {
            return setFormStatus(`ACCEPTED with Alice's updates`)
        }

        return setFormStatus('ACCEPTED')
    }



    return (
        <div className='main-content-container px-4 container-fluid'>

            <span> {/* Reset local storage button */}
                <Link to="/maritech/negotiations/">
                    <button onClick={() => resetHandler()} style={{ color: 'silver', float: "right" }}>
                        {svgRefreshPage}
                    </button>
                </Link>
            </span>

            {
                activeAccount === 'Bob' && formStatus === null
                    ? <div>
                        <h3>No new offers</h3>
                        <h4 id="timer" className={timerClass()}> </h4>
                    </div>
                    : <div className="formContainer">
                        <h2>{localState.negotiationStatus === null ? 'Open Negotiations' : 'Start New Negotiation'}</h2>

                        {activeAccount === 'Alice'
                            ?
                            <nav className="d-flex formNav">
                                <button href="#" className='nav-link active'>
                                    {localState.negotiationTitle}
                                    {activeAccount === 'Alice' && (formStatus === "ACCEPTED with Alice's updates" || formStatus === 'counteroffer by Bob')
                                        ? <div className="newUpdates"></div>
                                        : null
                                    }
                                </button>
                                <button href="#" className='nav-link'>Americano</button>
                                <button href="#" className='nav-link'>Flat White<div className="newUpdates"></div></button>
                                <button href="#" className='nav-link'>Black Coffee (BP)</button>
                                <button href="#" className='nav-link'>Black Coffee (Shell)<div className="newUpdates"></div></button>
                            </nav>
                            :
                            <nav className="d-flex formNav">
                                <button href="#" className='nav-link active'>
                                    {localState.negotiationTitle}
                                    {activeAccount === 'Bob' && (formStatus === "ACCEPTED with Bob's updates" || formStatus === 'counteroffer by Alice' || formStatus === 'Proposed')
                                        ? <div className="newUpdates"></div>
                                        : null
                                    }
                                </button>
                                <button href="#" className='nav-link'>Americano (CSSA ex Genova)</button>
                                <button href="#" className='nav-link'>Mandela (Vitol - 27/03) </button>
                            </nav>
                        }
                        {localState.negotiationStatus === null
                            ?
                            <button
                                className="sendForm NewNegotiation"
                                type='button'
                                onClick={() => localState.setNegotiationStatus('New Negotiation')}
                            >
                                Start New Negotiation
                            </button>
                            :
                            <div>
                                <h3 className={orderDecision()}>{offerStatus(formStatus, activeAccount)}</h3>

                                <h4 id="timer" className={timerClass()}> </h4>
                                <div className="preForm d-flex">
                                    <label className="d-inline-flex">
                                        Participants
                                    </label>
                                    <div className="participants">
                                        <button className="participantsMembers" type="button">Alice B. <br />(Morning Cup Shipping) {svgXcircle}</button>

                                        {localState.participants.map((el, index) => <button className="participantsMembers" type="button" key={index}>{el[0]} <br /> {el[1]} {svgXcircle}</button>)}

                                        <SimpleModal participants={localState.participants} setParticipants={localState.setParticipants} />
                                    </div>
                                </div>
                                <form
                                    className="contact-form"
                                    onSubmit={() => submitHandler()}
                                >

                                    <div className="formItem">
                                        {checkboxVisible()
                                            ? <input
                                                type="checkbox"
                                                defaultChecked
                                                disabled
                                            />
                                            : null}
                                        <label>
                                            Offer Type
                                        </label>
                                        <select id='OfferType'
                                            //className={inputClassName(localState.twentythreeCheckBox, localState.offerType)}
                                            defaultValue={localState.offerType[localState.offerType.length - 1]}
                                            disabled={formStatus === null ? false : true}
                                            onChange={event => onClickHandler(event)}
                                        >
                                            <option hidden></option>
                                            <option>Spot</option>
                                            <option>Time Charter</option>
                                        </select>
                                        {/* <p className={paragraphChangingVisible(localState.vesselName)}>
                                            {localState.vesselNameHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                        </p> */}
                                    </div>

                                    {localState.fullForm ?
                                        <div className="fullForm">
                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled
                                                    />
                                                    : null}
                                                <label>
                                                    Negotiation title
                                                </label>
                                                <input id='NegotiationTitle'
                                                    type="text"
                                                    defaultValue=""
                                                    //defaultValue='Spot'
                                                    //className={inputClassName(localState.twentythreeCheckBox, localState.offerType)}
                                                    disabled={formStatus === null ? false : true}
                                                />
                                                {/* <p className={paragraphChangingVisible(localState.vesselName)}>
                                                    {localState.vesselNameHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p> */}
                                            </div>


                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled
                                                    />
                                                    : null}
                                                <label>
                                                    Vessel Name
                                                </label>
                                                <select id='VesselName'
                                                    defaultValue={localState.vesselName[localState.vesselName.length - 1]}
                                                    //className={inputClassName(localState.firstCheckbox, localState.vesselName)}
                                                    disabled={formStatus === null ? false : true}
                                                >
                                                    <option>Americano</option>
                                                    <option>Black Coffee</option>
                                                    <option>Flat White</option>
                                                    <option>Cappuccino</option>
                                                </select>
                                                {/* <p className={paragraphChangingVisible(localState.vesselName)}>
                                                    {localState.vesselNameHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p> */}
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled
                                                    />
                                                    : null}
                                                <label>
                                                    Account
                                                </label>
                                                <select
                                                    id='Account'
                                                    defaultValue={localState.account[localState.account.length - 1]}
                                                    //className={inputClassName(localState.secondCheckbox, localState.account)}
                                                    disabled={formStatus === null ? false : true}
                                                >
                                                    <option>Shell Trading Int. Ltd.</option>
                                                    <option>BP Shipping</option>
                                                    <option>Mercuria</option>
                                                    <option>CSSA</option>
                                                </select>
                                                {/* <p className={paragraphChangingVisible(localState.account)}>
                                                    {localState.accountHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p> */}
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="3rdCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.thirdCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Load Range
                                                </label>
                                                <input
                                                    id="LoadRange"
                                                    type="text"
                                                    placeholder="Placeholder"
                                                    defaultValue={localState.loadRange[localState.loadRange.length - 1]}
                                                    className={inputClassName(localState.thirdCheckbox, localState.loadRange)}
                                                    disabled={checkInputStatus(localState.thirdCheckbox)}
                                                />
                                                <button type="button">{svgAddField}</button>

                                                <p className={paragraphChangingVisible(localState.loadRange)}>
                                                    {localState.loadRangeHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="4thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.fourthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Discharge Range
                                                </label>
                                                <input
                                                    id="DischargeRange"
                                                    type="text"
                                                    defaultValue={localState.dischargeRange[localState.dischargeRange.length - 1]}
                                                    disabled={checkInputStatus(localState.fourthCheckbox)}
                                                    className={inputClassName(localState.fourthCheckbox, localState.dischargeRange)}
                                                />
                                                <button type="button">{svgAddField}</button>

                                                <p className={paragraphChangingVisible(localState.dischargeRange)}>
                                                    {localState.dischargeRangeHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <div className="d-inline">
                                                        <input
                                                            onChange={() => handleCheckBox()}
                                                            type="checkbox"
                                                            id="5thCheckBox"
                                                            display='none'
                                                            defaultChecked={localState.fifthCheckbox ? true : false}
                                                        />
                                                        {/* <input
                                            onChange={() => handleCheckBox()}
                                            type="checkbox"
                                            id="22ndCheckBox"
                                            defaultChecked={twentywoCheckbox ? true : false}
                                        /> */}
                                                    </div>
                                                    : null}
                                                <label>
                                                    Laycan
                                                </label>
                                                <input
                                                    id="Laycan"
                                                    type="date"
                                                    defaultValue={localState.laycan[localState.laycan.length - 1]}
                                                    disabled={checkInputStatus(localState.fifthCheckbox)}
                                                    className={inputClassName(localState.fifthCheckbox, localState.laycan)}
                                                />
                                                <input
                                                    id="LaycanEnd"
                                                    type="date"
                                                    min={localState.laycan}
                                                    defaultValue={localState.laycanEnd[localState.laycanEnd.length - 1]}
                                                    disabled={checkInputStatus(localState.fifthCheckbox)}
                                                    className={inputClassName(localState.fifthCheckbox, localState.laycanEnd)}
                                                />

                                                <p className={paragraphChangingVisible(localState.laycan)}>
                                                    {localState.laycanHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                                <p className={paragraphChangingVisible(localState.laycanEnd)}>
                                                    {localState.laycanEndHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="6thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.sixthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Quantity
                                        </label>
                                                <input
                                                    id="Quantity"
                                                    type="number"
                                                    min={0}
                                                    defaultValue={localState.quantity[localState.quantity.length - 1]}
                                                    disabled={checkInputStatus(localState.sixthCheckbox)}
                                                    className={inputClassName(localState.sixthCheckbox, localState.quantity)}
                                                />
                                                <select
                                                    id="QuantitytUnits"
                                                    defaultValue={localState.quantityUnits[localState.quantityUnits.length - 1]}
                                                    disabled={checkInputStatus(localState.sixthCheckbox)}
                                                    className={inputClassName(localState.sixthCheckbox, localState.quantity)}
                                                >
                                                    <option>MT</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.quantity)}>
                                                    {localState.quantityHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="7thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.seventhCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Grade
                                        </label>
                                                <input
                                                    id="Grade"
                                                    type="text"
                                                    defaultValue={localState.grade[localState.grade.length - 1]}
                                                    disabled={checkInputStatus(localState.seventhCheckbox)}
                                                    className={inputClassName(localState.seventhCheckbox, localState.grade)}
                                                />

                                                <p className={paragraphChangingVisible(localState.grade)}>
                                                    {localState.gradeHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="8thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.eighthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Freight
                                                </label>
                                                <input
                                                    id="Freight"
                                                    type="number"
                                                    min={0}
                                                    placeholder="140"
                                                    defaultValue={localState.freight[localState.freight.length - 1]}
                                                    disabled={checkInputStatus(localState.eighthCheckbox)}
                                                    className={inputClassName(localState.eighthCheckbox, localState.freight)}
                                                />
                                                <select
                                                    id="FreightUnits"
                                                    defaultValue={localState.freightUnits[localState.freightUnits.length - 1]}
                                                    disabled={checkInputStatus(localState.eighthCheckbox)}
                                                    className={inputClassName(localState.eighthCheckbox, localState.freight)}
                                                >
                                                    <option>WS</option>
                                                    <option>LS</option>
                                                </select>
                                                <button type="button">{svgAddField}</button>

                                                <p className={paragraphChangingVisible(localState.freight)}>
                                                    {localState.freightHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="9thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.ninethCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Overage
                                                </label>
                                                <input
                                                    id="Overage"
                                                    type="number"
                                                    min={0}
                                                    placeholder="140"
                                                    defaultValue={localState.overage[localState.overage.length - 1]}
                                                    disabled={checkInputStatus(localState.ninethCheckbox)}
                                                    className={inputClassName(localState.ninethCheckbox, localState.overage)}
                                                />
                                                <select
                                                    id="OverageUnits"
                                                    defaultValue={localState.overageUnits[localState.overageUnits.length - 1]}
                                                    disabled={checkInputStatus(localState.ninethCheckbox)}
                                                    className={inputClassName(localState.ninethCheckbox, localState.overage)}
                                                >
                                                    <option>%</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.overage)}>
                                                    {localState.overageHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="10thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.tenthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Demurrage
                                        </label>
                                                <input
                                                    id="Demurrage"
                                                    type="number"
                                                    min={0}
                                                    placeholder="25000"
                                                    defaultValue={localState.demurrage[localState.demurrage.length - 1]}
                                                    disabled={checkInputStatus(localState.tenthCheckbox)}
                                                    className={inputClassName(localState.tenthCheckbox, localState.demurrage)}
                                                />
                                                <select
                                                    id="DemurrageUnits"
                                                    defaultValue={localState.demurrageUnits[localState.demurrageUnits.length - 1]}
                                                    disabled={checkInputStatus(localState.tenthCheckbox)}
                                                    className={inputClassName(localState.tenthCheckbox, localState.demurrage)}
                                                >
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.demurrage)}>
                                                    {localState.demurrageHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="11thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.eleventhCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Laytime
                                        </label>
                                                <input
                                                    id="Laytime"
                                                    type="number"
                                                    min={0}
                                                    step={0.5}
                                                    placeholder="24"
                                                    defaultValue={localState.laytime[localState.laytime.length - 1]}
                                                    disabled={checkInputStatus(localState.eleventhCheckbox)}
                                                    className={inputClassName(localState.eleventhCheckbox, localState.laytime)}
                                                />
                                                <select
                                                    id="LaytimeUnits"
                                                    defaultValue={localState.laytimeUnits[localState.laytimeUnits.length - 1]}
                                                    disabled={checkInputStatus(localState.eleventhCheckbox)}
                                                    className={inputClassName(localState.eleventhCheckbox, localState.laytime)}
                                                >
                                                    <option>Hours</option>
                                                    <option>Days</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.laytime)}>
                                                    {localState.laytimeHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="12thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.twelfthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Address Commission
                                                </label>
                                                <input
                                                    id="Add.Com"
                                                    type="number"
                                                    min={0}
                                                    step={0.25}
                                                    placeholder="25"
                                                    defaultValue={localState.addCom[localState.addCom.length - 1]}
                                                    disabled={checkInputStatus(localState.twelfthCheckbox)}
                                                    className={inputClassName(localState.twelfthCheckbox, localState.addCom)}
                                                />
                                                <select
                                                    id="AddComUnits"
                                                    defaultValue={localState.addCom[localState.addCom.length - 1]}
                                                    disabled={checkInputStatus(localState.twelfthCheckbox)}
                                                    className={inputClassName(localState.twelfthCheckbox, localState.addCom)}
                                                >
                                                    <option>%</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.addCom)}>
                                                    {localState.addComHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="13thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.thirteenthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Broker Commission
                                                </label>
                                                <input
                                                    id="Broker.Com"
                                                    type="number"
                                                    min={0}
                                                    step={0.25}
                                                    placeholder="25"
                                                    defaultValue={localState.brokerCom[localState.brokerCom.length - 1]}
                                                    disabled={checkInputStatus(localState.thirteenthCheckbox)}
                                                    className={inputClassName(localState.thirteenthCheckbox, localState.brokerCom)}
                                                />
                                                <select
                                                    id="BrokerComUnits"
                                                    defaultValue={localState.brokerCom[localState.brokerCom.length - 1]}
                                                    disabled={checkInputStatus(localState.thirteenthCheckbox)}
                                                    className={inputClassName(localState.thirteenthCheckbox, localState.brokerCom)}
                                                >
                                                    <option>%</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.brokerCom)}>
                                                    {localState.brokerComHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        disabled
                                                        style={{ opacity: 0 }}
                                                    />
                                                    : null}
                                                <label>
                                                    Last done
                                                </label>
                                                <input type="file" name="file" id="file" className="inputfile" />
                                                <label htmlFor="file">Choose file</label>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="14thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.fourteenthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Amendments <br /> to last done
                                                </label>
                                                <input
                                                    id="AmmLastDone"
                                                    type="text"
                                                    defaultValue={localState.ammLastDone[localState.ammLastDone.length - 1]}
                                                    className={inputClassName(localState.fourteenthCheckbox, localState.ammLastDone)}
                                                    disabled={checkInputStatus(localState.fourteenthCheckbox)}
                                                />
                                                <button type="button">{svgAddField}</button>

                                                <p className={paragraphChangingVisible(localState.ammLastDone)}>
                                                    {localState.ammLastDoneHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="15thCheckBox"
                                                        display='none'
                                                        defaultChecked={localState.fifteenthCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Subs due
                                        </label>
                                                <input
                                                    type="datetime-local"
                                                    id="SubsDue"
                                                    defaultValue={localState.subsDue[localState.subsDue.length - 1]}
                                                    className={inputClassName(localState.fifteenthCheckbox, localState.subsDue)}
                                                    disabled={checkInputStatus(localState.fifteenthCheckbox)}
                                                />

                                                <p className={paragraphChangingVisible(localState.subsDue)}>
                                                    {localState.subsDueHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled
                                                    />
                                                    : null}
                                                <label>
                                                    L3C
                                        </label>
                                                <input
                                                    id="L3C"
                                                    type="text"
                                                    defaultValue={localState.l3c[localState.l3c.length - 1]}
                                                    //className={inputClassName(localState.sixteenthCheckbox, localState.l3c)}
                                                    disabled={formStatus === null ? false : true}
                                                />
                                                <p className={paragraphChangingVisible(localState.l3c)}>
                                                    {localState.l3cHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled
                                                    />
                                                    : null}
                                                <label>
                                                    Itinerary
                                        </label>
                                                <input
                                                    id="Itinerary"
                                                    type="text"
                                                    defaultValue={localState.itinerary[localState.itinerary.length - 1]}
                                                    //className={inputClassName(localState.seventeenthCheckbox, localState.itinerary)}
                                                    disabled={formStatus === null ? false : true}
                                                />
                                                <p className={paragraphChangingVisible(localState.itinerary)}>
                                                    {localState.itineraryHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            {/* <div className="formItem">
                                        <label>
                                            Subs due
                                        </label>
                                        <input
                                            id="SubsDue2"
                                            type="date"
                                            defaultValue={subsDue2[subsDue2.length - 1]}
                                            className={inputClassName(eighteenthCheckbox, subsDue2)}
                                            disabled={checkInputStatus(eighteenthCheckbox)}
                                        />
                                        <span className='units subsDueEmpty'></span>
                                        {activeAccount === 'Bob' || subsDue2.length > 0
                                            ? <input
                                                onChange={() => handleCheckBox()}
                                                type="checkbox"
                                                id="18thCheckBox"
                                                display='none'
                                                defaultChecked={eighteenthCheckbox ? true : false}
                                            />
                                            : null}
                                        <p className={paragraphChangingVisible(subsDue2)}>
                                            {subsDue2History.map((el, index) => <span className={checkSpanIndex(index)} key={index}> {el} </span>)}
                                        </p>
                                    </div> */}

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        disabled
                                                    />
                                                    : null}
                                                <label>
                                                    TBOK Approved
                                                </label>
                                                <input
                                                    id="TBOK"
                                                    type="text"
                                                    defaultValue={localState.tbokApproved[localState.tbokApproved.length - 1]}
                                                    //className={inputClassName(localState.nineteenthCheckbox, localState.tbokApproved)}
                                                    disabled={formStatus === null ? false : true}
                                                />
                                                <p className={paragraphChangingVisible(localState.tbokApproved)}>
                                                    {localState.tbokApprovedHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        onChange={() => handleCheckBox()}
                                                        type="checkbox"
                                                        id="21thCheckBox"
                                                        defaultChecked={localState.twentyoneCheckbox ? true : false}
                                                    />
                                                    : null}
                                                <label>
                                                    Other
                                                </label>
                                                <textarea
                                                    id="OtherTextArea"
                                                    type="text"
                                                    defaultValue={localState.otherTextArea[localState.otherTextArea.length - 1]}
                                                    className={inputClassName(localState.twentyoneCheckbox, localState.otherTextArea)}
                                                    disabled={checkInputStatus(localState.twentyoneCheckbox)}
                                                />
                                            </div>

                                            {/* <div className="formItem text-center" id="other">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        disabled
                                                        style={{ opacity: 0 }}
                                                    />
                                                    : null}
                                                <input type="file" name="file" id="file" className="inputfile" />
                                                <label htmlFor="file">Choose file</label>
                                                <button type="button">{svgAddField}</button>

                                                <p className={paragraphChangingVisible(localState.otherTextArea) + ' text-left'}>
                                                    {localState.otherTextAreaHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div> */}

                                            <div className="formItem">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        disabled
                                                        style={{ opacity: 0 }}
                                                    />
                                                    : null}
                                                <label />

                                                <input type="file" name="file" id="file" className="inputfile" />
                                                <label htmlFor="file">Choose file</label>
                                                <button type="button">{svgAddField}</button>

                                                <p className={paragraphChangingVisible(localState.otherTextArea) + ' text-left'}>
                                                    {localState.otherTextAreaHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>


                                            <div className="formItem firmFor">
                                                {checkboxVisible()
                                                    ? <input
                                                        type="checkbox"
                                                        disabled
                                                        style={{ opacity: 0 }}
                                                    />
                                                    : null}
                                                <label>
                                                    Firm for
                                                </label>
                                                <input
                                                    id="FirmFor"
                                                    type="number"
                                                    min={0}
                                                    // placeholder="30"
                                                    defaultValue={localState.firmFor[localState.firmFor.length - 1]}
                                                //className={inputClassName(localState.twentiethCheckbox, localState.firmFor)}
                                                //disabled={checkInputStatus(localState.twentiethCheckbox)}
                                                />
                                                <select
                                                    id="FirmForUnits"
                                                    defaultValue={localState.firmForUnits[localState.firmForUnits.length - 1]}
                                                //disabled={checkInputStatus(localState.twentiethCheckbox)}
                                                //className={inputClassName(localState.twentiethCheckbox, localState.firmForUnits)}
                                                >
                                                    <option>Min</option>
                                                    <option>Hours</option>
                                                </select>

                                                <p className={paragraphChangingVisible(localState.firmFor)}>
                                                    {localState.firmForHistory.map((el, index) => <span key={index}> {el} < br /> </span>)}
                                                </p>
                                            </div>


                                            {(activeAccount === 'Alice' && (formStatus === 'Proposed' || formStatus === 'counteroffer by Alice')) || (activeAccount === 'Bob' && formStatus === 'counteroffer by Bob')
                                                ? null
                                                : activeAccount === 'Alice' && formStatus === null
                                                    ? <div className="response">
                                                        <button
                                                            className="sendForm"
                                                            type='submit'>
                                                            Submit
                                                </button>
                                                    </div>
                                                    : formStatus === 'Proposed' || formStatus === 'counteroffer' || formStatus === 'counteroffer by Bob' || formStatus === 'counteroffer by Alice'
                                                        ? <div>
                                                            <div className='response'>
                                                                <button
                                                                    type="submit"
                                                                    className="accept"
                                                                    onClick={localState.checkAllCheckboxStatus()
                                                                        ? () => counteroffersCheck()
                                                                        : () => handleSubmit()}
                                                                >
                                                                    {localState.checkAllCheckboxStatus() ? 'ACCEPT' : 'Make a counter offer'}
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="decline"
                                                                    onClick={() => declineHandler()}
                                                                >
                                                                    DECLINE
                                                                </button>
                                                            </div>
                                                        </div>
                                                        : <div className="response">
                                                            <button
                                                                className="sendForm"
                                                                type='submit'>
                                                                Download summary
                                                            </button>
                                                        </div>
                                            }
                                        </div>
                                        : null} {/* FULL FORM */}

                                </form>
                            </div>}
                    </div>

            } {/* ACTIVE ACCOUNT (Bob) + FORM STATUS (!NULL) */}
        </div >

    );
}
export default NewNegotiation;