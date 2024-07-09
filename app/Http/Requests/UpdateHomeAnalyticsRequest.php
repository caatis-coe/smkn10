<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHomeAnalyticsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'content' => ['required', 'array'],
            'content.*.title' => ['required', 'string'],
            'content.*.amount' => ['required', 'numeric', 'nullable'],
        ];
    }

    public function messages(): array
{
    return [
        'content.required' => 'The content field is required.',
        'content.array' => 'The content must be an array.',
        'content.*.title.required' => 'The title field is required.',
        'content.*.title.string' => 'The title must be a string.',
        'content.*.amount.required' => 'The amount field is required.',
        'content.*.amount.numeric' => 'The amount must be a number.',
        'content.*.amount.nullable' => 'The amount must be nullable or empty.',
    ];
}
}
