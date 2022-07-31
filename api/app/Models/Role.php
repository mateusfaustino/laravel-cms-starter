<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Permission;

class Role extends Model
{
    use HasFactory;

    public function permissions()
    {
        // return $this->belongsToMany(
        // RelatedModel,
        // pivot_table_name,
        // foreign_key_of_current_model_in_pivot_table, 
        // foreign_key_of_other_model_in_pivot_table);
        return $this->belongsToMany(
            Permission::class,
            'permission_role',
            'role_id',
            'permission_id'
        );
    }
    public function users ()
    {
        return $this->hasMany(User::class);
    }
}
