import SignalBody from "../../Components/Agil/Body/SignalBody";
import SignalCallout from "../../Components/Agil/Callout/signalCallout";
import { useState } from "react";
import SignalBreadcrumb from "../../Components/Zikri/Breadcrumb/SignalBreadcrumb";
import SignalButton from "../../Components/Zikri/Button/Signal-Button";
import SignalChips from "../../Components/Nadhifa/Chips/Chips";
import SignalCard from "../../Components/Agil/Card/SignalCard";
import SignalSnackBar from "../../Components/Nadhifa/SnackBar/signalSnackBar";

const MiniApp = () => {
  const maskapai = {
    from: "Jakarta",
    to: "Bali",
    pessangerName: "Desto",
    pessangerEmail: "desto@mantul.com",
    pessangerPhone: "081192830987",
    flights: [
      {
        logo: "https://placehold.co/80x80",
        maskapai: "GA",
        nomor_penerbangan: "GA-123",
        kelas: "Ekonomi",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "08:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "10:00",
        },
        harga: "Rp 900.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "GA",
        nomor_penerbangan: "GA-124",
        kelas: "Bisnis",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "09:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "11:00",
        },
        harga: "Rp 1.200.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "LG",
        nomor_penerbangan: "LG-001",
        kelas: "Ekonomi",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "10:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "12:00",
        },
        harga: "Rp 850.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "AA",
        nomor_penerbangan: "AA-456",
        kelas: "Bisnis",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "11:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "13:00",
        },
        harga: "Rp 1.500.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "LG",
        nomor_penerbangan: "LG-002",
        kelas: "Ekonomi",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "12:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "14:00",
        },
        harga: "Rp 800.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "AA",
        nomor_penerbangan: "AA-457",
        kelas: "Bisnis",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "13:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "15:00",
        },
        harga: "Rp 1.700.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "GA",
        nomor_penerbangan: "GA-125",
        kelas: "Ekonomi",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "14:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "16:00",
        },
        harga: "Rp 750.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "LG",
        nomor_penerbangan: "LG-003",
        kelas: "Bisnis",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "15:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "17:00",
        },
        harga: "Rp 1.900.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "GA",
        nomor_penerbangan: "GA-126",
        kelas: "Ekonomi",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "16:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "18:00",
        },
        harga: "Rp 700.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
      {
        logo: "https://placehold.co/80x80",
        maskapai: "AA",
        nomor_penerbangan: "AA-458",
        kelas: "Bisnis",
        waktu_keberangkatan: {
          status: "Berangkat",
          jam: "17:00",
        },
        waktu_kedatangan: {
          status: "Tiba",
          jam: "19:00",
        },
        harga: "Rp 1.800.000 / Orang",
        bagasi: [
          {
            name: "70kg",
            isDisable: false,
          },
          {
            name: "100kg",
            isDisable: false,
          },
          {
            name: "150kg",
            isDisable: true,
          },
        ],
      },
    ],
  };

  const [calloutOpen] = useState(true);
  const [beratData, setBeratData] = useState(maskapai.flights);
  const [selectedBagasi, setSelectedBagasi] = useState<any>(null);
  const [buttonDisabledState, setButtonDisabledState] = useState(
    maskapai.flights.map(() => true)
  );
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<any>([]);
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { name: "Home", href: "/zikri" },
  ]);

  const handleButtonClick = () => {
    setSnackBarVisible(true);
  };

  const handleChipClick = (beratIndex: any, bagIndex: any) => {
    setBeratData((prevBerat) =>
      prevBerat.map((maskapai, i) => {
        if (i === beratIndex) {
          const updatedBagasi = maskapai.bagasi.map((bagasi, idx) => ({
            ...bagasi,
            isSelected: idx === bagIndex,
          }));

          const selectedBagasiDetails = {
            maskapai: maskapai.maskapai,
            nomor_penerbangan: maskapai.nomor_penerbangan,
            kelas: maskapai.kelas,
            bagasi: updatedBagasi[bagIndex].name,
          };
          console.log("selectedbagasidetail", selectedBagasiDetails);

          setSelectedBagasi(selectedBagasiDetails);

          setBreadcrumbItems([
            { name: "Home", href: "/zikri" },
            {
              name: selectedBagasiDetails.nomor_penerbangan,
              href: `/nomor_penerbangan/${selectedBagasiDetails.nomor_penerbangan}`,
            },
            {
              name: selectedBagasiDetails.kelas,
              href: `/kelas/${selectedBagasiDetails.kelas}`,
            },
            {
              name: selectedBagasiDetails.bagasi,
              href: `/bagasi/${selectedBagasiDetails.bagasi}`,
            },
          ]);

          setButtonDisabledState((prev) =>
            prev.map((prevItem, prevIndex) =>
              prevIndex === beratIndex
                ? !updatedBagasi[bagIndex].isSelected
                : prevItem
            )
          );

          return {
            ...maskapai,
            bagasi: updatedBagasi,
          };
        } else {
          return {
            ...maskapai,
            bagasi: maskapai.bagasi.map((bagasi) => ({
              ...bagasi,
              isSelected: false,
            })),
          };
        }
      })
    );
  };

  const handleClassChipClick = (classType: any) => {
    console.log("classType", classType);
    console.log('selectedclasses',selectedClasses)
    setSelectedClasses((prevClasses:any) =>
      prevClasses.includes(classType)
        ? prevClasses.filter((a:any) => a !== classType)
        : [...prevClasses, classType]
    );

    setSelectedBagasi(null);

    setButtonDisabledState(() =>
      maskapai.flights.map((_, index) =>
        selectedClasses.length === 0 ||
        maskapai.flights[index].kelas === classType
          ? !selectedBagasi
          : true
      )
    );
  };

  const filteredFlights = beratData.filter(
    (flight) =>
      selectedClasses.length === 0 || selectedClasses.includes(flight.kelas)
  );

  return (
    <>
      <div className="m-2">
        <SignalCallout color="error" openCallout={calloutOpen}>
          <div className="flex flex-col flex-1 ml-2">
            <SignalBody weight="regular" size="2">
              From: {maskapai.from}
            </SignalBody>
            <SignalBody weight="regular" size="2">
              To: {maskapai.to}
            </SignalBody>
            <SignalBody weight="regular" size="2">
              Name: {maskapai.pessangerName}
            </SignalBody>
            <SignalBody weight="regular" size="2">
              Email: {maskapai.pessangerEmail}
            </SignalBody>
            <SignalBody weight="regular" size="2">
              Phone: {maskapai.pessangerPhone}
            </SignalBody>
          </div>
        </SignalCallout>
        <div className="m-2">
          <div className="flex gap-2">
            {["Ekonomi", "Bisnis"].map((classType) => (
              <SignalChips
                key={classType}
                data={{ name: classType }}
                onClick={() => handleClassChipClick(classType)}
                isSelected={selectedClasses.includes(classType)}
                img=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="m-2">
        <SignalBreadcrumb items={breadcrumbItems} />
      </div>
      {filteredFlights.map((flight, beratIndex) => (
        <div className="border border-gray-300 max-w-[1200px] m-2 p-5 rounded-md mb-5">
          <SignalCard>
            <div
              key={beratIndex}
              className="flex justify-between gap-5 items-center"
            >
              <div>
                <img src={flight.logo} />
              </div>
              <div className="grow">
                <SignalBody>{flight.nomor_penerbangan}</SignalBody>
                <SignalBody>{flight.kelas}</SignalBody>
                <div>
                  <div className="flex gap-1 flex-wrap">
                    {flight.bagasi.map((bagasi, bagIndex) => (
                      <SignalChips
                        key={bagIndex}
                        data={bagasi}
                        onClick={() => handleChipClick(beratIndex, bagIndex)}
                        img=""
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex grow">
                <div>
                  <SignalBody>{flight.waktu_keberangkatan.status}</SignalBody>
                  <SignalBody>{flight.waktu_keberangkatan.jam}</SignalBody>
                </div>
                <div className="ml-4">
                  <SignalBody>{flight.waktu_kedatangan.status}</SignalBody>
                  <SignalBody>{flight.waktu_kedatangan.jam}</SignalBody>
                </div>
              </div>
              <div className="">
                <div className="text-end">
                  <SignalBody>{flight.harga}</SignalBody>
                </div>
                <SignalButton
                  variant={1}
                  color={"primary"}
                  size={"small"}
                  full={true}
                  disable={buttonDisabledState[beratIndex]}
                  onClick={handleButtonClick}
                  namaButton="Pesan"
                />
              </div>
            </div>
          </SignalCard>
        </div>
      ))}
      {snackBarVisible && (
        <SignalSnackBar sticky="false" color="warning" position="bottomEnd">
          <div className="text-justify">website ini masih dalam tahap beta</div>
        </SignalSnackBar>
      )}
    </>
  );
};

export default MiniApp;
