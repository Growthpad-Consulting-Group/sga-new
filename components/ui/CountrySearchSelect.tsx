'use client'

import Select, { type SingleValue, type StylesConfig } from 'react-select'
import countries from '@/data/countries.json'

interface CountryOption {
  value: string
  label: string
}

// Country list ported from PAAN (paan-africa/public/assets/misc/countries.json)
const countryOptions: CountryOption[] = countries.map((country) => ({
  value: country.name,
  label: `${country.emoji} ${country.name}`,
}))

const styles: StylesConfig<CountryOption, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: state.isFocused ? '#f15522' : '#d1d5db',
    boxShadow: state.isFocused ? '0 0 0 1px #f15522' : 'none',
    '&:hover': { borderColor: state.isFocused ? '#f15522' : '#d1d5db' },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#f15522' : state.isFocused ? '#fde8e1' : 'white',
    color: state.isSelected ? 'white' : '#231f20',
    cursor: 'pointer',
  }),
  menu: (base) => ({ ...base, zIndex: 60, borderRadius: 8 }),
  placeholder: (base) => ({ ...base, color: '#9ca3af' }),
  singleValue: (base) => ({ ...base, color: '#231f20' }),
  input: (base) => ({ ...base, color: '#231f20' }),
}

interface CountrySearchSelectProps {
  id: string
  value: string
  onChange: (country: string) => void
}

export default function CountrySearchSelect({ id, value, onChange }: CountrySearchSelectProps): React.JSX.Element {
  const selected = countryOptions.find((option) => option.value === value) ?? null

  return (
    <Select<CountryOption, false>
      inputId={id}
      instanceId={id}
      options={countryOptions}
      value={selected}
      onChange={(option: SingleValue<CountryOption>) => onChange(option?.value ?? '')}
      placeholder="Select your country"
      isSearchable
      styles={styles}
    />
  )
}
