import { useState, useEffect } from 'react';

//local storage keys
function useLocalStorage() {

    const useLocalStorageList = (key, defaultValue) => {
        const stored = localStorage.getItem(key);
        const initial = stored ? JSON.parse(stored) : defaultValue;
        const [value, setValue] = useState(initial);

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);

        return [value, setValue];
    };

    const [negotiationStatus, setNegotiationStatus] = useLocalStorageList('Negotiation Status', null)

    const [participants, setParticipants] = useLocalStorageList('Participants members', [])
    const [unselectedParticipants, setUnselectedParticipants] = useLocalStorageList('Participants Unselected members',
        [
            ['Bob A.', '(Best Broker Ltd)'],
            ['John D.', '(Clarkson Shipbroking SA) '],
            ['Tim C.', '(Morning Cup Shipping) '],
            ['Jane E.', '(Italia C&A) ']
        ]);

    const [timerValue, setTimerValue] = useLocalStorageList('Timer time', 1800)

    const [fullForm, setFullForm] = useLocalStorageList('Full form', false)

    const [offerType, setOfferType] = useLocalStorageList('Offer Type', [])
    const [twentythreeCheckBox, setTwentythreeCheckBox] = useLocalStorageList('Check Box Offer Type', false)

    const [negotiationTitle, setNegotiationTitle] = useLocalStorageList('Negotiation Title', 'Untitled negotiation')

    const [vesselName, setVesselName] = useLocalStorageList('Vessel Name', [])
    //const [vesselNameHistory, setVesselNameHistory] = useLocalStorageList('Vessel Name History', [])
    const [firstCheckbox, setFirstCheckbox] = useLocalStorageList('Check Box Vessel Name', false)

    const [account, setAccount] = useLocalStorageList('Account', [])
    //const [accountHistory, setAccountHistory] = useLocalStorageList('Account History', [])
    const [secondCheckbox, setSecondCheckbox] = useLocalStorageList('Check Box Account', false)

    const [loadRange, setLoadRange] = useLocalStorageList('Load Range', [])
    const [loadRangeHistory, setLoadRangeHistory] = useLocalStorageList('Load Range History', [])
    const [thirdCheckbox, setThirdCheckbox] = useLocalStorageList('Check Box Load Range', false)

    const [dischargeRange, setDischargeRange] = useLocalStorageList('Discharge Range', [])
    const [dischargeRangeHistory, setDischargeRangeHistory] = useLocalStorageList('Discharge Range History', [])
    const [fourthCheckbox, setFourthCheckbox] = useLocalStorageList('Check Box Discharge Range', false)

    const [laycan, setLaycan] = useLocalStorageList('Laycan Start Date', [])
    const [laycanHistory, setLaycanHistory] = useLocalStorageList('Laycan History', [])
    const [fifthCheckbox, setFifthCheckbox] = useLocalStorageList('Check Box Laycan', false)

    const [laycanEnd, setLaycanEnd] = useLocalStorageList('Laycan End Date', [])
    const [laycanEndHistory, setLaycanEndHistory] = useLocalStorageList('Laycan End History', [])
    const [twentywoCheckbox, setTwentytwoCheckbox] = useLocalStorageList('Check Box Laycan End', false)

    const [quantity, setQuantity] = useLocalStorageList('Quantity', [])
    const [quantityHistory, setQuantityHistory] = useLocalStorageList('Quantity History', [])
    const [sixthCheckbox, setSixthCheckbox] = useLocalStorageList('Check Box Quantity', false)
    const [quantityUnits, setQuantityUnits] = useLocalStorageList('Quantity Units', [])

    const [grade, setGrade] = useLocalStorageList('Grade', [])
    const [gradeHistory, setGradeHistory] = useLocalStorageList('Grade History', [])
    const [seventhCheckbox, setSeventhCheckbox] = useLocalStorageList('Check Box Grade', false)

    const [freight, setFreight] = useLocalStorageList('Freight', [])
    const [freightHistory, setFreightHistory] = useLocalStorageList('Freight History', [])
    const [eighthCheckbox, setEighthCheckbox] = useLocalStorageList('Check Box Freight', false)
    const [freightUnits, setFreightUnits] = useLocalStorageList('Freight Units', [])

    const [overage, setOverage] = useLocalStorageList('Overage', [])
    const [overageHistory, setOverageHistory] = useLocalStorageList('Overage History', [])
    const [ninethCheckbox, setNinethCheckbox] = useLocalStorageList('Check Box Overage', false)
    const [overageUnits, setOverageUnits] = useLocalStorageList('Overage Units', [])

    const [demurrage, setDemurrage] = useLocalStorageList('Demurrage', [])
    const [demurrageHistory, setDemurrageHistory] = useLocalStorageList('Demurrage History', [])
    const [tenthCheckbox, setTenthCheckbox] = useLocalStorageList('Check Box Demurrage', false)
    const [demurrageUnits, setDemurrageUnits] = useLocalStorageList('Demurrage Units', [])

    const [laytime, setLaytime] = useLocalStorageList('Laytime', [])
    const [laytimeHistory, setLaytimeHistory] = useLocalStorageList('Laytime History', [])
    const [eleventhCheckbox, setEleventhCheckbox] = useLocalStorageList('Check Box Laytime', false)
    const [laytimeUnits, setLaytimeUnits] = useLocalStorageList('Laytime units', [])

    const [addCom, setAddCom] = useLocalStorageList('Add.Com', [])
    const [addComHistory, setAddComHistory] = useLocalStorageList('Add.Com History', [])
    const [twelfthCheckbox, setTwelfthCheckbox] = useLocalStorageList('Check Box Add.Com', false)

    const [brokerCom, setBrokerCom] = useLocalStorageList('Broker.Com', [])
    const [brokerComHistory, setBrokerComHistory] = useLocalStorageList('Broker.Com History', [])
    const [thirteenthCheckbox, setThirteenthCheckbox] = useLocalStorageList('Check Box Broker.Com', false)

    const [ammLastDone, setAmmLastDone] = useLocalStorageList('Amm. Last Done', [])
    const [ammLastDoneHistory, setAmmLastDoneHistory] = useLocalStorageList('Amm. Last Done History', [])
    const [fourteenthCheckbox, setFourteenthCheckbox] = useLocalStorageList('Check Box Amm. Last Done', false)

    const [subsDue, setSubsDue] = useLocalStorageList('Subs Due', [])
    const [subsDueHistory, setSubsDueHistory] = useLocalStorageList('Subs Due History', [])
    const [fifteenthCheckbox, setFifteenthCheckbox] = useLocalStorageList('Check Box Subs Due', false)

    const [l3c, setl3c] = useLocalStorageList('L3C', [])
    const [l3cHistory, setl3cHistory] = useLocalStorageList('L3C History', [])
    const [sixteenthCheckbox, setSixteenthCheckbox] = useLocalStorageList('Check Box L3C', false)

    const [itinerary, setItinerary] = useLocalStorageList('Itinerary', [])
    const [itineraryHistory, setItineraryHistory] = useLocalStorageList('Itinerary History', [])
    const [seventeenthCheckbox, setSeventeenthCheckbox] = useLocalStorageList('Check Box Itinerary', false)

    const [tbokApproved, setTbokApproved] = useLocalStorageList('TBOK Approved', [])
    const [tbokApprovedHistory, setTbokApprovedHistory] = useLocalStorageList('TBOK Approved History', [])
    const [nineteenthCheckbox, setNineteenthCheckbox] = useLocalStorageList('Check Box TBOK Approved', false)

    const [otherTextArea, setOtherTextArea] = useLocalStorageList('Other Text Area', [])
    const [otherTextAreaHistory, setOtherTextAreaHistory] = useLocalStorageList('Other Text Area History', [])
    const [twentyoneCheckbox, setTwentyoneCheckbox] = useLocalStorageList('Check Box Other Text Area', false)

    const [firmFor, setFirmFor] = useLocalStorageList('Firm For', [])
    const [firmForHistory, setFirmForHistory] = useLocalStorageList('Firm For History', [])
    const [twentiethCheckbox, setTwentiethCheckbox] = useLocalStorageList('Check Box Firm For', false)
    const [firmForUnits, setFirmForUnits] = useLocalStorageList('Firm For Units', [])

    function resetLocalStorage() {

        ///const localState = useLocalStorage(); //local storage keys

        setNegotiationStatus(null)
        setTimerValue(1800)
        setVesselName([])
        setFirstCheckbox(false)
        setAccount([])
        setSecondCheckbox(false)
        setLoadRange([])
        setThirdCheckbox(false)
        setDischargeRange([])
        setFourthCheckbox(false)
        setLaycan([])
        setLaycanEnd([])
        setFifthCheckbox(false)
        setTwentytwoCheckbox(false)
        setQuantity([])
        setQuantityUnits([])
        setSixthCheckbox(false)
        setGrade([])
        setSeventhCheckbox(false)
        setFreight([])
        setEighthCheckbox(false)
        setFreightUnits([])
        setOverage([])
        setOverageUnits([])
        setNinethCheckbox(false)
        setDemurrage([])
        setTenthCheckbox(false)
        setDemurrageUnits([])
        setLaytime([])
        setLaytimeUnits([])
        setEleventhCheckbox(false)
        setAddCom([])
        setTwelfthCheckbox(false)
        setBrokerCom([])
        setThirteenthCheckbox(false)
        setAmmLastDone([])
        setFourteenthCheckbox(false)
        setSubsDue([])
        setFifteenthCheckbox(false)
        setl3c([])
        setSixteenthCheckbox(false)
        setItinerary([])
        setSeventeenthCheckbox(false)
        // setSubsDue2([])
        // setEighteenthCheckbox(false)
        setTbokApproved([])
        setNineteenthCheckbox(false)
        setOtherTextArea([])
        setTwentyoneCheckbox(false)
        setFirmFor([])
        setTwentiethCheckbox(false)
        setTwentythreeCheckBox(false)
        setOfferType([])
        setNegotiationTitle('Untitled negotiation')
        setFullForm(false)

        //setVesselNameHistory([])
        //setAccountHistory([])
        setLoadRangeHistory([])
        setDischargeRangeHistory([])
        setLaycanHistory([])
        setLaycanEndHistory([])
        setQuantityHistory([])
        setGradeHistory([])
        setFreightHistory([])
        setOverageHistory([])
        setDemurrageHistory([])
        setLaytimeHistory([])
        setAddComHistory([])
        setBrokerComHistory([])
        setAmmLastDoneHistory([])
        setSubsDueHistory([])
        setl3cHistory([])
        setItineraryHistory([])
        // setSubsDue2History([])
        setTbokApprovedHistory([])
        setOtherTextAreaHistory([])
        setFirmForHistory([])
        setFirmForUnits([])
        setParticipants([])
        setUnselectedParticipants([
            ['Bob A.', '(Best Broker Ltd)'],
            ['John D.', '(Clarkson Shipbroking SA) '],
            ['Tim C.', '(Morning Cup Shipping) '],
            ['Jane E.', '(Italia C&A) ']
        ])
    }

    // Set true value to all Checkboxes for correct visible decisions button in response interface, when form status is counteroffer
    const setAllCheckboxTrue = () => {
        setFirstCheckbox(true)
        setSecondCheckbox(true)
        setThirdCheckbox(true)
        setFourthCheckbox(true)
        setFifthCheckbox(true)
        setSixthCheckbox(true)
        setSeventhCheckbox(true)
        setEighthCheckbox(true)
        setNinethCheckbox(true)
        setTenthCheckbox(true)
        setEleventhCheckbox(true)
        setTwelfthCheckbox(true)
        setThirteenthCheckbox(true)
        setFourteenthCheckbox(true)
        setFifteenthCheckbox(true)
        setSixteenthCheckbox(true)
        setSeventeenthCheckbox(true)
        // setEighteenthCheckbox(true)
        setNineteenthCheckbox(true)
        setTwentiethCheckbox(true)
        setTwentyoneCheckbox(true)
        setTwentytwoCheckbox(true)
        setTwentythreeCheckBox(true)
    }

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
            // eighteenthCheckbox &&
            nineteenthCheckbox &&
            twentiethCheckbox &&
            twentyoneCheckbox &&
            twentywoCheckbox &&
            twentythreeCheckBox === true
        ) {
            return true
        }
    }


    return {
        unselectedParticipants,
        setUnselectedParticipants,
        participants,
        setParticipants,
        firmForUnits,
        setFirmForUnits,
        fullForm,
        setFullForm,
        negotiationTitle,
        setNegotiationTitle,
        negotiationStatus,
        setNegotiationStatus,
        timerValue,
        setTimerValue,
        offerType,
        setOfferType,
        twentythreeCheckBox,
        setTwentythreeCheckBox,
        vesselName,
        setVesselName,
        //vesselNameHistory,
        //setVesselNameHistory,
        firstCheckbox,
        setFirstCheckbox,
        account,
        setAccount,
        //accountHistory,
        //setAccountHistory,
        secondCheckbox,
        setSecondCheckbox,
        loadRange,
        setLoadRange,
        loadRangeHistory,
        setLoadRangeHistory,
        thirdCheckbox,
        setThirdCheckbox,
        dischargeRange,
        setDischargeRange,
        dischargeRangeHistory,
        setDischargeRangeHistory,
        fourthCheckbox,
        setFourthCheckbox,
        laycan,
        setLaycan,
        laycanHistory,
        setLaycanHistory,
        fifthCheckbox,
        setFifthCheckbox,
        laycanEnd,
        setLaycanEnd,
        laycanEndHistory,
        setLaycanEndHistory,
        twentywoCheckbox,
        setTwentytwoCheckbox,
        quantity,
        setQuantity,
        quantityHistory,
        setQuantityHistory,
        sixthCheckbox,
        setSixthCheckbox,
        quantityUnits,
        setQuantityUnits,
        grade,
        gradeHistory,
        seventhCheckbox,
        freight,
        freightHistory,
        eighthCheckbox,
        freightUnits,
        overage,
        overageHistory,
        ninethCheckbox,
        overageUnits,
        demurrage,
        demurrageHistory,
        tenthCheckbox,
        demurrageUnits,
        laytime,
        laytimeHistory,
        eleventhCheckbox,
        laytimeUnits,
        addCom,
        addComHistory,
        twelfthCheckbox,
        brokerCom,
        brokerComHistory,
        thirteenthCheckbox,
        ammLastDone,
        ammLastDoneHistory,
        fourteenthCheckbox,
        subsDue,
        subsDueHistory,
        fifteenthCheckbox,
        l3c,
        l3cHistory,
        sixteenthCheckbox,
        itinerary,
        itineraryHistory,
        seventeenthCheckbox,
        tbokApproved,
        tbokApprovedHistory,
        nineteenthCheckbox,
        otherTextArea,
        otherTextAreaHistory,
        twentyoneCheckbox,
        firmFor,
        firmForHistory,
        twentiethCheckbox,
        setGrade,
        setGradeHistory,
        setSeventhCheckbox,
        setFreight,
        setFreightHistory,
        setEighthCheckbox,
        setFreightUnits,
        setOverage,
        setOverageHistory,
        setNinethCheckbox,
        setOverageUnits,
        setDemurrage,
        setDemurrageHistory,
        setTenthCheckbox,
        setDemurrageUnits,
        setLaytime,
        setLaytimeHistory,
        setEleventhCheckbox,
        setLaytimeUnits,
        setAddCom,
        setAddComHistory,
        setTwelfthCheckbox,
        setBrokerCom,
        setBrokerComHistory,
        setThirteenthCheckbox,
        setAmmLastDone,
        setAmmLastDoneHistory,
        setFourteenthCheckbox,
        setSubsDue,
        setSubsDueHistory,
        setFifteenthCheckbox,
        setl3c,
        setl3cHistory,
        setSixteenthCheckbox,
        setItinerary,
        setItineraryHistory,
        setSeventeenthCheckbox,
        setTbokApproved,
        setTbokApprovedHistory,
        setNineteenthCheckbox,
        setOtherTextArea,
        setOtherTextAreaHistory,
        setTwentyoneCheckbox,
        setFirmFor,
        setFirmForHistory,
        setTwentiethCheckbox,
        resetLocalStorage,
        setAllCheckboxTrue,
        checkAllCheckboxStatus
    };
}
export default useLocalStorage;