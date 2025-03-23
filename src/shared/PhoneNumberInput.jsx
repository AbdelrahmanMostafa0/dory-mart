"use client";
import { phoneCodes } from "@/data/phoneCodes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const PhoneNumberInput = ({
  phoneIdentifier = "phone",
  codeIdentifier = "code",
  placeholder = "",
  register,
  setValue,
  containerClassName,
  watch,
  errors,
  inputStyle,
  btnStyle,
  error,
}) => {
  const [countrySearch, setCountrySearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const code = watch(codeIdentifier) || "+20";
  const currentCountry = phoneCodes.find((cont) => {
    return cont.code === code;
  });
  watch(codeIdentifier);

  const filterdCountries = useMemo(() => {
    if (!countrySearch) {
      return phoneCodes;
    }
    return phoneCodes.filter((cont) => {
      return (
        cont.ar.includes(countrySearch) ||
        cont.en.toLowerCase().includes(countrySearch.toLowerCase()) ||
        cont.code.includes(countrySearch) ||
        cont.symbol.toLowerCase().includes(countrySearch.toLowerCase())
      );
    });
  }, [phoneCodes, countrySearch]);
  useEffect(() => {
    if (!watch(codeIdentifier)) {
      setValue(codeIdentifier, "+20");
    }
  }, [watch(codeIdentifier)]);
  useEffect(() => {
    if (
      watch(codeIdentifier) == "+20" &&
      watch(phoneIdentifier).length == 11 &&
      watch(phoneIdentifier).startsWith("0")
    ) {
      setValue(phoneIdentifier, watch(phoneIdentifier).slice(1));
    }
  }, [watch(phoneIdentifier)]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const setCode = (code) => {
    setValue(codeIdentifier, code);
    setShowMenu(false);
    setCountrySearch("");
  };
  return (
    <div className="space-y-2 ">
      <div
        className={cn(
          "flex h-[50px] w-full gap-1 items-start",
          containerClassName
        )}
      >
        <div
          ref={menuRef}
          className="h-full w-4/12 sm:w-3/12 max-w-[85px] relative"
        >
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className={cn(
              "h-full  text-sm flex items-center justify-center gap-1  w-full rounded-md border outline-none bg-white p-1 focus:border-blue-500",
              btnStyle
            )}
            type="button"
          >
            <Image
              src={currentCountry?.flag}
              width={25}
              height={25}
              alt={currentCountry?.ar}
            />
            <span>{currentCountry?.code}</span>
          </button>
          {showMenu && (
            <div className="absolute flex flex-col items-center w-[200px] pt-2 overflow-auto max-h-[150px] top-[48px] min-h-[70px] bg-white rounded-md border z-5 mt-1">
              <input
                type="text"
                className="border py-1 px-2  outline-none  w-[182px] rounded-sm placeholder:text-sm"
                placeholder="Search"
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
              />
              <div
                className={` w-full h-full overflow-auto overflow-x-hidden  `}
              >
                {filterdCountries?.map((c) => {
                  return (
                    <button
                      onClick={() => setCode(c.code)}
                      type="button"
                      className="w-[182px] flex items-center gap-1  text-start border-b mx-auto px-2 py-1 line-clamp-1"
                      key={c.en + c.ar}
                    >
                      <Image
                        src={c.flag}
                        alt={c.ar}
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                      {c.code + " " + c.en}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <input
          autoComplete="off"
          {...register(phoneIdentifier, {
            required: {
              value: true,
              message: "Enter your phone number",
            },
            validate: {
              correctPhone: (value) => {
                return (
                  (currentCountry.phoneLength <= value.length &&
                    value.length <= currentCountry.phoneLength + 1) ||
                  "Incorrect phone number"
                );
              },
            },
          })}
          className={cn(
            `w-full bg-white border   focus:border-blue-500 outline-none px-3 rounded-md h-full my-0 ${
              (errors[phoneIdentifier] || error) &&
              "focus:border-red-500 border-red-500"
            } `,
            inputStyle
          )}
          type="number"
          inputMode="tel"
          placeholder={placeholder}
        />
      </div>
      {errors[phoneIdentifier] && (
        <Error>{errors[phoneIdentifier]?.message}</Error>
      )}
    </div>
  );
};
export default PhoneNumberInput;
